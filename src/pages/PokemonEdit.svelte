<script>
    import router from "page";
    let card = {};
    let startingAmount, name, image, availabilityDate, selectedRarity, selectedElements, selectedWeakness, selectedResistance;

    const rarities = [
        {text: 'Select rarity', value: ''},
        {text: 'Common', value: 'common'},
        {text: 'Uncommon', value: 'uncommon'},
        {text: 'Rare', value: 'rare'}
    ];

    const elements = [
        {text: 'Select element', value: ''},
        {text: 'Fire', value: 'fire'},
        {text: 'Water', value: 'water'},
        {text: 'Electric', value: 'electric'},
        {text: 'Ground', value: 'ground'},
        {text: 'Grass', value: 'grass'}
    ];

    const weaknesses = [
        {text: 'Select weakness', value: ''},
        {text: 'Fire', value: 'fire'},
        {text: 'Water', value: 'water'},
        {text: 'Electric', value: 'electric'},
        {text: 'Ground', value: 'ground'},
        {text: 'Grass', value: 'grass'}
    ];

    const resistances = [
        {text: 'Select resistance', value: ''},
        {text: 'Fire', value: 'fire'},
        {text: 'Water', value: 'water'},
        {text: 'Electric', value: 'electric'},
        {text: 'Ground', value: 'ground'},
        {text: 'Grass', value: 'grass'}
    ];

    async function submitCard() {

        console.log(card.name)

        const formData = new FormData();
        formData.append("name", name);
        formData.append("startingAmount", startingAmount);
        formData.append("image", image[0]);
        formData.append("availabilityDate", availabilityDate);
        formData.append("rarity", selectedRarity.text);
        formData.append("element", selectedElements.text);
        formData.append("weakness", selectedWeakness.text);
        formData.append("resistance", selectedResistance.text);

        try {
            const response = await fetch(`http://localhost:3000/pokemon-cards/${card.cardID}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: formData
            });
            if (response.status === 201) {
                // let result = await response.json();
                window.location.replace(window.location.href.replace("/edit", ""))
            }
        } catch(error) {
            console.error(error);
        }
    }

</script>

<form id="edit-card" class="row g-3 pb-3">
    <div class="col-12 col-md-8">
        <label for="pokemon-name" class="col-form-label">Pokemon name</label>
        <input type="text" class="form-control" placeholder="Pokemon name" id="pokemon-name" bind:value="{card.name}" onchange="{e => name = e.target.value}">
    </div>

    <div class="col-12 col-md-4">
        <label for="starting-amount" class="col-form-label">Starting amount</label>
        <input type="text" class="form-control" placeholder="Starting amount" id="starting-amount" bind:value="{startingAmount}">
    </div>

    <div class="col-12 col-md-3">
        <label for="date" class="col-form-label">Available until</label>
        <input type="date" class="form-control" id="date" bind:value="{availabilityDate}">
    </div>


    <div class="col-12 col-md-9">
        <label for="formFile" class="col-form-label">Upload an image</label>
        <input class="form-control" type="file" id="formFile" bind:files="{image}">
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Rarity</label>
        <select class="form-select" bind:value={selectedRarity} id="rarity">
            {#each rarities as rarity}
                <option value={rarity}>
                    {rarity.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Element</label>
        <select class="form-select" bind:value={selectedElements} id="element">
            {#each elements as element}
                <option value={element}>
                    {element.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Weakness</label>
        <select class="form-select" bind:value={selectedWeakness} id="weakness">
            {#each weaknesses as weakness}
                <option value={weakness}>
                    {weakness.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Resistance</label>
        <select class="form-select" bind:value={selectedResistance} id="resistance">
            {#each resistances as resistance}
                <option value={resistance}>
                    {resistance.text}
                </option>
            {/each}
        </select>
    </div>
</form>

<div class="col-12 d-flex justify-content-between">
    <div class="text-start">
        <!-- If (loggedIn && admin) statement -->
        <button type="button" class="btn btn-primary text-white" on:click={submitCard}>Save changes <i class="far fa-check-square"></i></button>
    </div>

    <!-- Endif -->
    <div class="text-end">
        <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
    </div>
</div>