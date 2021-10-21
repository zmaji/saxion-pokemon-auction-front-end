<script>
    import { fade } from 'svelte/transition';
    import Swal from "sweetalert2";
    import {createEventDispatcher} from "svelte";
    import rolesStore from "../../stores/roles";
    export let bid = {};
    export let card = {};
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
                await fetch(`http://localhost:3000/pokemon-cards/${card.cardID}/bids/${bid.bidID}`, {
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
</script>

<div class="col-12 col-md-4 px-3 py-2" transition:fade>
    <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-0">
        <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0">€ {bid.bidPrice}</h4>
            <small class="">Placed by: {bid.ownerName}</small>
            {#if $rolesStore.roles.indexOf('admin') !== -1}
            <button type="button" class="btn" on:click={() => deleteBid()}><i class="fas fa-trash-alt color"></i></button>
            {/if}
        </div>
    </div>
</div>

<style>
    .color {
        color: red;
    }
</style>

