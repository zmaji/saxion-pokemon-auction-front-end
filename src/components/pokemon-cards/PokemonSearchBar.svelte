<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    let nameValue = "";
    let rarityValue, elementValue, weaknessValue, resistanceValue
    let finalQuery;

    const rarities = [
        {text: 'Select rarity', value: ''},
        {text: 'Common', value: 'Common'},
        {text: 'Uncommon', value: 'Uncommon'},
        {text: 'Rare', value: 'Rare'}
    ];

    const elements = [
        {text: 'Select element', value: ''},
        {text: 'Fire', value: 'Fire'},
        {text: 'Water', value: 'Water'},
        {text: 'Electric', value: 'Electric'},
        {text: 'Ground', value: 'Ground'},
        {text: 'Grass', value: 'Grass'}
    ];

    const weaknesses = [
        {text: 'Select weakness', value: ''},
        {text: 'Fire', value: 'Fire'},
        {text: 'Water', value: 'Water'},
        {text: 'Electric', value: 'Electric'},
        {text: 'Ground', value: 'Ground'},
        {text: 'Grass', value: 'Grass'}
    ];

    const resistances = [
        {text: 'Select resistance', value: ''},
        {text: 'Fire', value: 'Fire'},
        {text: 'Water', value: 'Water'},
        {text: 'Electric', value: 'Electric'},
        {text: 'Ground', value: 'Ground'},
        {text: 'Grass', value: 'Grass'}
    ];

    function submitSearch() {
        const params = { nameValue, rarityValue, elementValue, weaknessValue, resistanceValue };

        dispatch('message', params);

        const filtered = [];
        const references = {
            nameValue: 'name',
            elementValue: 'element',
            rarityValue: 'rarity',
            weaknessValue: 'weakness',
            resistanceValue: 'resistance'
        }

        for (const index in params) {
            if (params[index]) {
                filtered.push(`${references[index]}: ${params[index]}`)
            }
        }

        finalQuery = filtered.join(', ')
    }

    function showFilters() {
        let filters = document.getElementById("filters");
        if (filters.style.display === "none") {
            filters.style.display = "flex";
        } else {
            filters.style.display = "none";
        }
    }

</script>

<form action="" on:submit|preventDefault={submitSearch} class="py-3">
    <div class="col-md-6">
        <div class="input-group mb-3">
            <input type="text" class="form-control" name="search" placeholder="Search term" aria-label="Username" aria-describedby="search-addon" bind:value={nameValue}>
            <button type="submit" class="input-group-text btn btn-primary text-white px-3 py-2" id="search-addon"><i class="fas fa-search"></i></button>
            <div>
                <button type="button" class="btn btn-secondary text-white ms-3 px-3 py-2" id="showFilters" on:click={showFilters} >Advanced search</button>
            </div>
        </div>
    </div>

    <div class="row g-3 pb-3 mt-2" id="filters" style="display: none">
    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Rarity</label>
        <select class="form-select" name="rarity" id="rarity" bind:value={rarityValue} on:change={submitSearch}>
            {#each rarities as rarity}
                <option value={rarity.value}>
                    {rarity.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Element</label>
        <select class="form-select" name="element" id="element" bind:value={elementValue} on:change={submitSearch}>
            {#each elements as element}
                <option value={element.value}>
                    {element.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Weakness</label>
        <select class="form-select" name="weakness" id="weakness" bind:value={weaknessValue} on:change={submitSearch}>
            {#each weaknesses as weakness}
                <option value={weakness.value}>
                    {weakness.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Resistance</label>
        <select class="form-select" name="resistance" id="resistance" bind:value={resistanceValue} on:change={submitSearch}>
            {#each resistances as resistance}
                <option value={resistance.value}>
                    {resistance.text}
                </option>
            {/each}
        </select>
    </div>
    </div>
</form>

{#if finalQuery}
    <h3>Search results for: {finalQuery}</h3>
{:else}
    <h3>Showing all pokemon</h3>
{/if}
