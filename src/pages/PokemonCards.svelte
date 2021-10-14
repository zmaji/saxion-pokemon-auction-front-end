<script>
    import { fade } from 'svelte/transition';
    import PokemonCard from "../components/pokemon-cards/PokemonCard.svelte";
    import auctionStore from "../stores/auctions";
    import router from "page";

    const fetchCards = (async () => {
        const response = await fetch('http://localhost:3000/pokemon-cards');
        const result = await response.json();
        $auctionStore.auctions = result;

        return result;
    })();

</script>

<button class="btn btn-primary text-white" on:click="{() => router.redirect('/pokemon-cards/create')}">Add auction</button>

{#await fetchCards}
    <div class="alert alert-primary" role="alert">
        Fetching Cards...
    </div>
{:then cards}
    <div class="row" transition:fade>
        {#each cards as card}
            <PokemonCard {card}/>
        {/each}
    </div>
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Cards...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}