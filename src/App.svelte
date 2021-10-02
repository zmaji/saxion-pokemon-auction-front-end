<script>
	import List from "./components/List.svelte";
	import Nav from "./components/Nav.svelte";
	import PokemonCards from "./components/PokemonCards.svelte";
	import SearchMenu from "./components/SearchMenu.svelte";
	import Footer from "./components/Footer.svelte";

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
	<title>Pokemon cards auction</title>
	<link rel="stylesheet" href="/css/main.css">
	<link rel="stylesheet" href="/fontawesome/css/all.css">
	<script src="/js/bootstrap.min.js" defer></script>
</svelte:head>

<Nav/>
<main class="bg-light py-5">
	<section class="container py-5 px-2 px-md-5 mt-5 bg-white rounded shadow-sm">
		<input bind:value={userInput} type="text" placeholder="Enter text">
		<button on:click={addItem}>Add item</button>
		<List list="{appList}"/>
		<h1 class="text-dark">All available pokemon cards</h1>
		<hr>
		<SearchMenu/>
		<PokemonCards/>
	</section>
</main>
<Footer/>

<style>
	:global(body) {
		padding: 0;
	}
</style>