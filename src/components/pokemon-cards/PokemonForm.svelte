<!--<script>-->
<!--    export let card = {};-->

<!--    let selectedRarity;-->
<!--    const rarities = [-->
<!--        {text: 'Select rarity', value: ''},-->
<!--        {text: 'Common', value: 'common'},-->
<!--        {text: 'Uncommon', value: 'uncommon'},-->
<!--        {text: 'Rare', value: 'rare'}-->
<!--    ];-->

<!--    let selectedElements;-->
<!--    const elements = [-->
<!--        {text: 'Select element', value: ''},-->
<!--        {text: 'Fire', value: 'fire'},-->
<!--        {text: 'Water', value: 'water'},-->
<!--        {text: 'Electric', value: 'electric'},-->
<!--        {text: 'Ground', value: 'ground'},-->
<!--        {text: 'Grass', value: 'grass'}-->
<!--    ];-->

<!--    let selectedWeakness;-->
<!--    const weaknesses = [-->
<!--        {text: 'Select weakness', value: ''},-->
<!--        {text: 'Fire', value: 'fire'},-->
<!--        {text: 'Water', value: 'water'},-->
<!--        {text: 'Electric', value: 'electric'},-->
<!--        {text: 'Ground', value: 'ground'},-->
<!--        {text: 'Grass', value: 'grass'}-->
<!--    ];-->

<!--    let selectedResistance;-->
<!--    const resistances = [-->
<!--        {text: 'Select resistance', value: ''},-->
<!--        {text: 'Fire', value: 'fire'},-->
<!--        {text: 'Water', value: 'water'},-->
<!--        {text: 'Electric', value: 'electric'},-->
<!--        {text: 'Ground', value: 'ground'},-->
<!--        {text: 'Grass', value: 'grass'}-->
<!--    ];-->
<!--</script>-->

<!--<form class="row g-3 pb-3">-->
<!--    <div class="col-12 col-md-8">-->
<!--        <label for="pokemon-name" class="col-form-label">Pokemon name:</label>-->
<!--        <input type="text" class="form-control" placeholder="Pokemon name" id="pokemon-name" bind:value="{card.name === null ? card.name : ''}">-->
<!--    </div>-->

<!--    <div class="col-12 col-md-4">-->
<!--        <label for="starting-amount" class="col-form-label">Starting amount:</label>-->
<!--        <input type="text" class="form-control" placeholder="Starting amount" id="starting-amount" bind:value="{card.startingAmount === null ? card.startingAmount : ''}">-->
<!--    </div>-->

<!--    <div class="col-12">-->
<!--        <label for="image-url" class="col-form-label">Image URL:</label>-->
<!--        <input type="text" class="form-control" placeholder="Image URL" id="image-url" bind:value="{card.imageURL === null ? card.imageURL : ''}">-->
<!--    </div>-->

<!--    <div class="col-12 col-md-6 col-lg-3">-->
<!--        <label for="resistance">Rarity</label>-->
<!--        <select class="form-select" bind:value={selectedRarity} id="rarity">-->
<!--            {#each rarities as rarity}-->
<!--                <option value={rarity}>-->
<!--                    {rarity.text}-->
<!--                </option>-->
<!--            {/each}-->
<!--        </select>-->
<!--    </div>-->

<!--    <div class="col-12 col-md-6 col-lg-3">-->
<!--       <label for="resistance">Elements</label>-->
<!--        <select class="form-select" bind:value={selectedElements} id="element">-->
<!--            {#each elements as element}-->
<!--                <option value={element}>-->
<!--                    {element.text}-->
<!--                </option>-->
<!--            {/each}-->
<!--        </select>-->
<!--    </div>-->

<!--    <div class="col-12 col-md-6 col-lg-3">-->
<!--        <label for="resistance">Weaknesses</label>-->
<!--        <select class="form-select" bind:value={selectedWeakness} id="weakness">-->
<!--            {#each weaknesses as weakness}-->
<!--                <option value={weakness}>-->
<!--                    {weakness.text}-->
<!--                </option>-->
<!--            {/each}-->
<!--        </select>-->
<!--    </div>-->

<!--    <div class="col-12 col-md-6 col-lg-3">-->
<!--        <label for="resistance">Resistances</label>-->
<!--        <select class="form-select" bind:value={selectedResistance} id="resistance">-->
<!--            {#each resistances as resistance}-->
<!--                <option value={resistance}>-->
<!--                    {resistance.text}-->
<!--                </option>-->
<!--            {/each}-->
<!--        </select>-->
<!--    </div>-->
<!--</form>-->