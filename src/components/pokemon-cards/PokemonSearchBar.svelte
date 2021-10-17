<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    let value = "";
    let finalQuery;

    function submitSearch() {
        dispatch('message', {
            query: value
        });

        finalQuery = value;
    }

</script>

<form action="" on:submit|preventDefault={submitSearch} class="py-3">
    <div class="col-md-6">
        <div class="input-group mb-3">
            <input type="text" class="form-control" name="search" placeholder="Search term" aria-label="Username" aria-describedby="search-addon" bind:value={value}>
            <button type="submit" class="input-group-text btn btn-primary text-white px-3 py-2" id="search-addon"><i class="fas fa-search"></i></button>
        </div>
    </div>
</form>

{#if finalQuery}
    <h3>Search results for: {finalQuery}</h3>
{:else}
    <h3>Showing all pokemon</h3>
{/if}
