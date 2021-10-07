<script>
    export let name = "";
    export let items = [];

    let selected;
</script>

<select class="form-select" bind:value={selected} id="{name}">
    {#each items as item}
        <option value={item}>
            {item.text}
        </option>
    {/each}
</select>