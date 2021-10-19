<script>
    import { fade } from 'svelte/transition';
    export let bid = {};
</script>


<div class="col-12 col-md-6 px-3 py-2" transition:fade>
    <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-0">
        <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0">€ {bid.bidPrice}</h4>
            <small class="">Placed by: {bid.ownerName}</small>
        </div>
    </div>
</div>


