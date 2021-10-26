<script>
    import router from "page";
    import {useForm, validators, Hint, required} from "svelte-use-form";
    let startingAmount, name, image, availabilityDate, selectedRarity, selectedElements, selectedWeakness, selectedResistance;
    let requiredMessage = "This is a mandatory field!"

    const form = useForm();

    async function postCard() {
        const formData = new FormData();
        formData.append("userID", 1);
        formData.append("name", name);
        formData.append("startingAmount", startingAmount);
        formData.append("image", image[0]);
        formData.append("availabilityDate", availabilityDate);
        formData.append("rarity", selectedRarity);
        formData.append("element", selectedElements);
        formData.append("weakness", selectedWeakness);
        formData.append("resistance", selectedResistance);

        try {
            const response = await fetch('http://localhost:3000/pokemon-cards', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: formData
            });
            if (response.status === 201) {
                console.log('test')
                let result = await response.json();
                window.location.replace(window.location.href.replace("/create", `/${result.cardID}`))
            }
        } catch(error) {
            console.error(error);
        }
    }

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
</script>

<form use:form class="row g-3 pb-3">
    <div class="col-12 col-md-8">
        <label for="pokemon-name" class="col-form-label">Pokemon name</label>
        <input type="text" name="name" class="form-control" placeholder="Pokemon name" id="pokemon-name" bind:value="{name}" use:validators={[required]}>
        <Hint for="name" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-4">
        <label for="starting-amount" class="col-form-label">Starting amount</label>
        <input type="text" name="starting-amount" class="form-control" placeholder="Starting amount" id="starting-amount" bind:value="{startingAmount}" use:validators={[required]}>
        <Hint for="starting-amount" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-3">
        <label for="date" class="col-form-label">Available until</label>
        <input type="date" class="form-control" id="date" bind:value="{availabilityDate}" use:validators={[required]}>
        <Hint for="starting-amount" on="required">{requiredMessage}</Hint>
    </div>


    <div class="col-12 col-md-9">
        <label for="formFile" class="col-form-label">Upload an image</label>
        <input class="form-control" name="image" type="file" id="formFile" bind:files="{image}" use:validators={[required]}>
        <Hint for="image" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Rarity</label>
        <select class="form-select" name="rarity" bind:value={selectedRarity} id="rarity" use:validators={[required]}>
            <Hint for="rarity" on="required">{requiredMessage}</Hint>
            {#each rarities as rarity}
                <option value={rarity.value}>
                    {rarity.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Element</label>
        <select class="form-select" name="element" bind:value={selectedElements} id="element" use:validators={[required]}>
            <Hint for="element" on="required">{requiredMessage}</Hint>
            {#each elements as element}
                <option value={element.value}>
                    {element.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Weakness</label>
        <select class="form-select" name="weakness" bind:value={selectedWeakness} id="weakness" use:validators={[required]}>
            <Hint for="weakness" on="required">{requiredMessage}</Hint>
            {#each weaknesses as weakness}
                <option value={weakness.value}>
                    {weakness.text}
                </option>
            {/each}
        </select>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Resistance</label>
        <select class="form-select" name="resistance" bind:value={selectedResistance} id="resistance" use:validators={[required]}>
            <Hint for="resistance" on="required">{requiredMessage}</Hint>
            {#each resistances as resistance}
                <option value={resistance.value}>
                    {resistance.text}
                </option>
            {/each}
        </select>
    </div>
</form>

<div class="col-12 d-flex justify-content-between">
    <div class="text-start">
        <!-- If (loggedIn && admin) statement -->
        <button type="button" class="btn btn-primary text-white" on:click={postCard}>Create <i class="far fa-check-square"></i></button>
    </div>

    <!-- Endif -->
    <div class="text-end">
        <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
    </div>
</div>