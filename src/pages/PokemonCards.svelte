<script>
    import { paginate, LightPaginationNav } from 'svelte-paginate';
    import { fade } from 'svelte/transition';
    import PokemonCard from "../components/pokemon-cards/PokemonCard.svelte";
    import router from "page";
    import {onMount} from "svelte";
    import PokemonSearchBar from "../components/pokemon-cards/PokemonSearchBar.svelte";

    let items = [];
    let currentPage = 1;
    let pageSize = 6;

    onMount(async () => {
        await fetchCards()
    });

    async function fetchCards() {
        const response = await fetch('http://localhost:3000/pokemon-cards');
        const result = await response.json();
        items = result;

        return result;
    }

    async function filterCards(e) {
        const response = await fetch(`http://localhost:3000/pokemon-cards?name=${e.detail.query}`);
        const result = await response.json();
        items = result;
        return result;
    }

    $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

{#await fetchCards}
    <div class="alert alert-primary" role="alert">
        Fetching Cards...
    </div>
{:then cards}
    <button class="btn btn-primary text-white" on:click="{() => router.redirect('/pokemon-cards/create')}">Add auction</button>

    <PokemonSearchBar on:message={filterCards}/>

    <div class="row" transition:fade>
        {#each paginatedItems as card}
            <PokemonCard {card} on:delete={fetchCards}/>
        {/each}

    </div>

    <LightPaginationNav
            totalItems="{items.length}"
            pageSize="{pageSize}"
            currentPage="{currentPage}"
            limit="{1}"
            showStepOptions="{true}"
            on:setPage="{(e) => currentPage = e.detail.page}"
    />
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Cards...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}

<style>
    :global(.pagination-nav ) {
        box-shadow: none!important;
    }
</style>