<script>
    import rolesStore from "../../stores/roles";
    import router from "page";
    import {onMount} from "svelte";
    import Bid from "../bids/Bid.svelte";
    import Swal from "sweetalert2";

    export let params;
    let card = {};
    let cardId, bidPrice;

    onMount(async () => {
        cardId = parseInt(params.id);
        const response = await fetch(`http://localhost:3000/pokemon-cards/${cardId}`);
        card = await response.json();
        console.log(card)
    });

    async function fetchCardBids() {
        const response = await fetch(`http://localhost:3000/pokemon-cards/${cardId}/bids`);
        let result =  await response.json();
        if (result) {
            card.bids = result;
        }
    }

    async function postBid() {
        console.log(bidPrice)
        try {
            const response = await fetch(`http://localhost:3000/pokemon-cards/${cardId}/bids`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    "bidPrice": bidPrice
                })
            });
            console.log(response)
            if (response.status === 201) {
                await fetchCardBids()
                return response;
            }
        } catch(error) {
            console.error(error);
        }
    }

    function tryDelete() {
        Swal.fire({
            iconColor: '#dc3545',
            title: 'Are you sure?',
            text: "This auction will be deleted!",
            icon: 'warning',
            confirmButtonColor: '#ffde00',
            confirmButtonText: 'Yes, delete this auction',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#dc3545'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/pokemon-cards/${card.cardID}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });

                await Swal.fire({
                    title: 'Deleted!',
                    text: "This auction has been deleted",
                    icon: 'success',
                    confirmButtonColor: '#ffde00',
                });

                router.redirect('/pokemon-cards');
            }
        });
    }

</script>

<div class="row">
    <div class="col-12">
        <h3>{card.name}</h3>
    </div>
    <hr>
    <div class="col-12 col-md-6 position-relative">
        <img src="http://localhost:3000/uploads/{card.image}" alt="{card.name}">
        <div class="text-center mt-4">
            <span class="price-tag rounded-pill bg-primary px-3 py-2 text-center text-white fw-bold shadow-sm">Starting at: € {card.startingAmount}</span>

        </div>
    </div>
    <div class="col-12 col-md-6">
        <div class="d-flex flex-column px-md-5 px-md-0 py-4">
            <h6>Card rarity:</h6>
            <p class="py-2 px-3 fw-bold rounded text-white rarity-{card.rarity}">{card.rarity}</p>

            <h6>Element:</h6>
            <p class="py-2 px-3 fw-bold rounded text-white element-{card.element}">{card.element}</p>

            <h6>Weakness:</h6>
            <p class="py-2 px-3 fw-bold rounded text-white element-{card.weakness}">{card.weakness}</p>

            <h6>Resistance:</h6>
            <p class="py-2 px-3 fw-bold rounded text-white element-{card.resistance}">{card.resistance}</p>

            <h6>Available until: </h6>

            {#if new Date(card.availabilityDate).getTime() > new Date().getTime()}
                <div class="d-flex align-items-center">
                    <i class="fas fa-hourglass-half pe-2"></i>
                    <p class="mb-0" id="CountdownTimer">{card.availabilityDate}</p>
                </div>
            {:else}
                <div class="alert alert-danger " role="alert">
                    <i class="fas fa-calendar-times"></i>
                    This auction has expired
                </div>
            {/if}
        </div>
    </div>

    <div class="col-12 col-md-6 mb-3">
        <h3>Place bid:</h3>
        <div class=" input-group">
            <input type="text" class="form-control" placeholder="Bid amount" id="bid-amount" bind:value={bidPrice}>
            <button type="submit" class="btn btn-success text-white" on:click={postBid}>Place bid</button>

        </div>
    </div>
    <h3 class="pt-2 ps-3">Current bids:</h3>
    {#if card.bids && card.bids.length}
        {#each card.bids as bid}
            <Bid {bid}/>
        {/each}
    {:else}
        <div class="col-12 col-md-6 px-3 py-2">
            <p>No bids have been placed yet.</p>
        </div>
    {/if}
    <div>
        <hr>
    </div>

    {#if $rolesStore.roles.indexOf('admin') !== -1}
        <div class="col-12 d-flex justify-content-between">
            <div class="text-start">
                <button type="button" class="btn btn-primary text-white me-2" on:click={() => router.redirect(`/pokemon-cards/${card.cardID}/edit`)}>Edit <i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger" on:click={tryDelete}>Delete <i class="fas fa-trash-alt"></i></button>
            </div>

            <div class="text-end">
                <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
            </div>
        </div>
    {:else}
        <div class="col-12">
            <div class="text-end">
                <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
            </div>
        </div>
    {/if}

</div>

<style>
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.24));
    }

    .price-tag {
        font-size: 1.25rem;
    }

    .rarity-Common,
    .rarity-Uncommon,
    .rarity-Rare,
    .element-Fire,
    .element-Water,
    .element-Electric,
    .element-Ground,
    .element-Grass {
        width: fit-content;
        width: -moz-fit-content;
    }

    .element-Fire {
        background-color: #FF0000;
    }
    .element-Water {
        background-color: #00CCFF;
    }
    .element-Electric {
        background-color: #FFCC00;
    }
    .element-Ground {
        background-color: #996600;
    }
    .element-Grass {
        background-color: #33CC00;
    }

    .rarity-Common {
        background-color: #777;
    }
    .rarity-Uncommon {
        background-color: #009900;
    }
    .rarity-Rare {
        background-color: #9900CC;
    }
</style>
