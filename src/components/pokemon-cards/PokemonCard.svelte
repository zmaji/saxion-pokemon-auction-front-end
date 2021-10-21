<script>
    import rolesStore from "../../stores/roles";
    import router from "page";
    import Swal from "sweetalert2";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let card = {};

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
                    method: 'DELETE'
                });

                await Swal.fire({
                    title: 'Deleted!',
                    text: "This auction has been deleted",
                    icon: 'success',
                    confirmButtonColor: '#ffde00',
                });

                dispatch('delete');
            }
        });
    }
</script>

<div class="col-12 col-md-6 col-lg-4 p-3">
    <div class="bg-white rounded border border-primary pokecard">
        <div class="d-flex justify-content-center py-2 position-relative bg-light pokecard-img">
            <div class="position-absolute end-0 me-2 pokecard-actions">
                <div class="d-flex flex-column bg-white rounded py-2 px-1 shadow-sm">
                    <button type="button" class="btn btn-primary text-white" on:click={() => router.redirect(`/pokemon-cards/${card.cardID}`)}><i class="fas fa-eye"></i></button>
                    {#if $rolesStore.roles.indexOf('admin') !== -1}
                        <button type="button" class="btn btn-secondary text-white mt-2" on:click={() => router.redirect(`/pokemon-cards/${card.cardID}/edit`)}><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger mt-2" on:click={() => tryDelete()}><i class="fas fa-trash-alt"></i></button>
                    {/if}
                </div>
            </div>
            {#if card.image}

                <img src="http://localhost:3000/uploads/{card.image}" alt="{card.name}">
            {/if}
        </div>
        <div class="p-3 alert-primary border-top border-4 border-primary">
            <h3>{card.name}</h3>
            <p>Starting amount: <span class="fw-bold">€ {card.startingAmount}</span></p>
            <hr>
            <div class="text-end">
                <small class="text-muted">Available until: {card.availabilityDate} <i class="far fa-calendar-alt"></i></small>
            </div>
        </div>
    </div>
</div>

<style>
    .pokecard:hover .pokecard-actions {
        opacity: 1;
        top: 0.5rem;
    }

    .pokecard:hover img {
        transform: rotateX(0) scale(1);
        filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.24));
    }

    .pokecard-img {
        background-image: url('/img/pattern-cut.png');
        background-repeat: repeat;
        perspective: 900px;
    }

    .pokecard-actions {
        transition: top 300ms ease, opacity 300ms ease;
        top: 1rem;
        opacity: 0;
        z-index: 1;
    }

    .pokecard-actions .btn:hover i {
        animation: 300ms ease wiggle-icon;
        animation-iteration-count: 1;
    }

    @keyframes wiggle-icon {
        0% {
            transform: rotate(0deg);
        }

        25% {
            transform: rotate(45deg);
        }

        50% {
            transform: rotate(0deg);
        }

        75% {
            transform: rotate(-45deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.24));
        transition: .3s transform ease, .3s filter ease;
        transform: rotateX(20deg) rotateZ(10deg) scale(0.9);
        perspective: 900px;
    }
</style>