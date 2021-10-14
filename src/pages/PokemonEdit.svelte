<script>
    import PokemonForm from "../components/pokemon-cards/PokemonForm.svelte";
    import router from "page";
</script>
<PokemonForm/>
<div class="col-12 d-flex justify-content-between">
    <div class="text-start">
        <!-- If (loggedIn && admin) statement -->
        <button type="button" class="btn btn-primary text-white">Save <i class="far fa-check-square"></i></button>
        <button type="button" class="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
    </div>

    <!-- Endif -->
    <div class="text-end">
        <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
    </div>
</div>