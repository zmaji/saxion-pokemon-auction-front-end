<script>
    import router from "page";
    import { fade } from 'svelte/transition';
    import Swal from "sweetalert2";
    import {createEventDispatcher} from "svelte";
    import rolesStore from "../../stores/roles";
    export let bid = {};
    export let highestBid = {};
    export let auctionClosed = {};
    const dispatch = createEventDispatcher();

    function deleteBid() {
        Swal.fire({
            iconColor: '#dc3545',
            title: 'Are you sure?',
            text: "This bid will be deleted!",
            icon: 'warning',
            confirmButtonColor: '#ffde00',
            confirmButtonText: 'Yes, delete this bid',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#dc3545'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/pokemon-cards/${bid.cardID}/bids/${bid.bidID}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });

                await Swal.fire({
                    title: 'Deleted!',
                    text: "This bid has been deleted",
                    icon: 'success',
                    confirmButtonColor: '#ffde00',
                });

                dispatch('delete');
            }
        });
    }

    function makeWinningBid() {
        Swal.fire({
            iconColor: '#dc3545',
            title: 'Are you sure?',
            text: "This bid will become the winning bid and thus close the auction!",
            icon: 'warning',
            confirmButtonColor: '#ffde00',
            confirmButtonText: 'Yes, select this bid',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#dc3545'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/pokemon-cards/${bid.cardID}/bids/${bid.bidID}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                });

                await Swal.fire({
                    title: 'We got a winner!',
                    text: "This bid has been made the winner",
                    icon: 'success',
                    confirmButtonColor: '#ffde00',
                });

                dispatch('delete');
            }
        });
    }
</script>

<div class="col-12 col-md-4 px-3 py-2" transition:fade>
    <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-0">
        <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0">€ {bid.bidPrice}</h4>
            <small class="">Placed by: {bid.ownerName}</small>
            {#if $rolesStore.roles.indexOf('admin') !== -1 && !auctionClosed}
            <button type="button" class="btn btn-danger text-white" on:click={() => deleteBid()}><i class="fas fa-trash-alt"></i></button>
                {#if bid.bidPrice === parseInt(highestBid)}
                    <button type="button" class="btn btn-success text-white" on:click={() => makeWinningBid()}><i class="fas fa-award"></i></button>
                {/if}
            {/if}
            {#if window.location.pathname === '/bids'}
                <button type="button" class="btn btn-{bid.hasWon ? 'primary text-white' : 'secondary'}" on:click={() => router.redirect(`/pokemon-cards/${bid.cardID}`)}><i class="fas fa-share-square"></i></button>
            {/if}
        </div>
    </div>
</div>

