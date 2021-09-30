<script>
    export let list = [];
</script>

<main>
    <ul>
        {#each list as item}
            <li>{item}</li>
        {/each}
    </ul>
</main>