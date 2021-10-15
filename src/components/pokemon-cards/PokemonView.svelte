<script>
    import router from "page";
    import {onMount} from "svelte";
    let card = {};

    export let params;
    let cardId;

    onMount(async () => {
        cardId = parseInt(params.id);
        const response = await fetch(`http://localhost:3000/pokemon-cards/${cardId}`);
        card = await response.json();
        console.log(card)
    });

    export let bid = {};

    const fetchBidOwner = (async () => {
        console.log('Bearer ' + localStorage.getItem('token'))
        const response = await fetch(`http://localhost:3000/users/${bid.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return await response.json();
    })();
</script>

<div class="row">
    <div class="col-12">
        <h3>{card.name}</h3>
    </div>
    <hr>
    <div class="col-12 col-md-6 position-relative">
        <div class="price-tag rounded-circle bg-primary p-2 text-white fw-bold shadow-sm position-absolute">€ {card.startingAmount}</div>
        <img src="http://localhost:3000/uploads/{card.image}" alt="{card.name}">
    </div>
    <div class="col-12 col-md-6">
        <div class="d-flex flex-column px-5 px-md-0 py-4">
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

        <!-- Option to have items centered -->
        <!--        <div class="pt-3 pt-lg-4">-->
        <!--            <h6>Available until: Date</h6>-->
        <!--            <i class="fas fa-hourglass-half pb-2"></i>-->
        <!--            <p id="CountdownTimer"></p>-->
        <!--        </div>-->
        <!-- Option to have items centered but div aligned left -->
        <!--        <div class="pt-3 pt-lg-4 d-flex justify-content-start">-->
        <!--            <div class="d-flex flex-column align-items-center">-->
        <!--                <h6>Available until: Date</h6>-->
        <!--                <i class="fas fa-hourglass-half pb-2"></i>-->
        <!--                <p id="CountdownTimer"></p>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
    <div class="col-12 col-md-6 mb-3">
        <h3>Place bid:</h3>
        <div class=" input-group">
            <input type="text" class="form-control" placeholder="Bid amount" id="bid-amount">
            <button type="submit" class="btn btn-success text-white">Place bid</button>

        </div>
    </div>
    <h3 class="pt-2 ps-3">Current bids:</h3>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <hr>
    <div class="col-12 d-flex justify-content-between">
        <div class="text-start">
            <!-- If (loggedIn && admin) statement -->
            <button type="button" class="btn btn-primary text-white me-2" on:click={() => router.redirect(`/pokemon-cards/${card.cardID}/edit`)}>Edit <i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
        </div>

        <!-- Endif -->
        <div class="text-end">
            <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
        </div>
    </div>
</div>

<style>
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.24));
    }

    .price-tag {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        width: 5rem;
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
