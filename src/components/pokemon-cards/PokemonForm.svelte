<script>
    import FormSelect from "../FormSelect.svelte";
    import FormLabel from "../FormLabel.svelte";

    export let card = {};

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
</script>

<form class="row g-3 pb-3">
    <div class="col-12 col-md-8">
        <label for="pokemon-name" class="col-form-label">Pokemon name:</label>
        <input type="text" class="form-control" placeholder="Pokemon name" id="pokemon-name" value="{card.name === null ? card.name : ''}">
    </div>

    <div class="col-12 col-md-4">
        <label for="starting-amount" class="col-form-label">Starting amount:</label>
        <input type="text" class="form-control" placeholder="Starting amount" id="starting-amount" value="{card.startingAmount === null ? card.startingAmount : ''}">
    </div>

    <div class="col-12">
        <label for="image-url" class="col-form-label">Image URL:</label>
        <input type="text" class="form-control" placeholder="Image URL" id="image-url" value="{card.imageURL === null ? card.imageURL : ''}">
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <FormLabel labelName="Rarity"/>
        <FormSelect name="rarity" items="{rarities}"/>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <FormLabel labelName="Element"/>
        <FormSelect name="element" items="{elements}"/>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <FormLabel labelName="Weakness"/>
        <FormSelect name="weakness" items="{weaknesses}"/>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
        <FormLabel labelName="Resistance"/>
        <FormSelect name="resistance" items="{resistances}"/>
    </div>
</form>