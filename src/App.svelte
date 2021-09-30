<script>
	import List from "./components/List.svelte";
	import Nav from "./components/Nav.svelte";
	import PokemonCards from "./components/PokemonCards.svelte";
	import LoginModal from "./components/LoginModal.svelte";

	let appList = [];
	let userInput = "";

	const addItem = () => {
		if (userInput.length > 0) {
			appList = [...appList, userInput]
			userInput = "";
		}
	}
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="/fontawesome/css/all.css">
</svelte:head>

<main class="bg-light pt-5">
<Nav/>

<section class="container py-5 px-2 px-md-5 mt-5 bg-white rounded shadow-sm">
	<input bind:value={userInput} type="text" placeholder="Enter text">
	<button on:click={addItem}>Add item</button>
	<List list="{appList}"/>
	<PokemonCards/>
</section>
<LoginModal/>

</main>


<style>
	:global(body) {
		padding: 0;
	}
</style>