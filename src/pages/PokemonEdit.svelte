<script>
    import router from "page";
    import {onMount} from "svelte";
    import {useForm, validators, Hint, required} from "svelte-use-form";
    export let card = {}
    let requiredMessage = "This is a mandatory field!"

    const form = useForm();

    export let params;
    let cardId;

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

    onMount(async () => {
        cardId = parseInt(params.id);
        const response = await fetch(`http://localhost:3000/pokemon-cards/${cardId}`);
        card = await response.json();
        console.log(card)
    });

    async function submitCard() {

        console.log(card)

        const formData = new FormData();
        formData.append("name", card.name);
        formData.append("startingAmount", card.startingAmount);
        formData.append("image", card.image[0]);
        formData.append("availabilityDate", card.availabilityDate);
        formData.append("rarity", card.rarity);
        formData.append("element", card.element);
        formData.append("weakness", card.weakness);
        formData.append("resistance", card.resistance);

        try {
            const response = await fetch(`http://localhost:3000/pokemon-cards/${card.cardID}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: formData
            });
            if (response.status === 200) {
                // let result = await response.json();
                console.log('test')
                router.redirect(`/pokemon-cards/${card.cardID}`);
            }
        } catch(error) {
            console.error(error);
        }
    }

</script>

<form use:form class="row g-3 pb-3">
    <div class="col-12 col-md-8">
        <label for="pokemon-name" class="col-form-label">Pokemon name</label>
        <input type="text" name="name" class="form-control" placeholder="Pokemon name" id="pokemon-name" bind:value="{card.name}" use:validators={[required]}>
        <Hint for="name" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-4">
        <label for="starting-amount" class="col-form-label">Starting amount</label>
        <input type="text" name="starting-amount" class="form-control" placeholder="Starting amount" id="starting-amount" bind:value="{card.startingAmount}" use:validators={[required]}>
        <Hint for="starting-amount" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-3">
        <label for="date" class="col-form-label">Available until</label>
        <input type="date" class="form-control" id="date" bind:value="{card.availabilityDate}" use:validators={[required]}>
        <Hint for="starting-amount" on="required">{requiredMessage}</Hint>
    </div>


    <div class="col-12 col-md-9">
        <label for="formFile" class="col-form-label">Upload an image</label>
        <input class="form-control" name="image" type="file" id="formFile" bind:files="{card.image}" use:validators={[required]}>
        <Hint for="image" on="required">{requiredMessage}</Hint>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <label class="mb-1" for="resistance">Rarity</label>
        <select class="form-select" name="rarity" bind:value={card.rarity} id="rarity" use:validators={[required]}>
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
        <select class="form-select" name="element" bind:value={card.elements} id="element" use:validators={[required]}>
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
        <select class="form-select" name="weakness" bind:value={card.weakness} id="weakness" use:validators={[required]}>
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
        <select class="form-select" name="resistance" bind:value={card.resistance} id="resistance" use:validators={[required]}>
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
        <button type="button" class="btn btn-primary text-white" on:click={submitCard}>Save changes <i class="far fa-check-square"></i></button>
    </div>

    <!-- Endif -->
    <div class="text-end">
        <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
    </div>
</div>