<script>
    import Bid from "./Bid.svelte";
    import { fade } from 'svelte/transition';

    export let card = {};

    const fetchCardBids = (async () => {
        const response = await fetch(`http://localhost:3000/pokemon-cards/${card.cardID}/bids`);
        return await response.json();
    })();
</script>

{#await fetchCardBids}
    <div class="alert alert-primary" role="alert">
        Fetching Bids...
    </div>
{:then bids}
    <div class="row" transition:fade>
        {#each bids as bid}
            <Bid {bid}/>
        {/each}
    </div>
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Bids...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}