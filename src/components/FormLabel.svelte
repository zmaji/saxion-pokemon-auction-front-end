<script>
    export let labelName = "";
</script>

<label for="{labelName.replace(labelName.charAt(0), labelName.charAt(0).toLocaleLowerCase())}">{labelName}:</label>