<script>
    import router from "page";
    import Home from "./pages/Home.svelte";
    import Pokemon from "./pages/PokemonCards.svelte";
    import Users from "./pages/Users.svelte";
    import PokemonView from "./components/pokemon-cards/PokemonView.svelte";
    import Login from "./pages/Login.svelte";
    import PokemonEdit from "./pages/PokemonEdit.svelte";

    // Middleware
    import isLoggedIn from "./middleware/isLoggedIn";

    // Layout components
    import Nav from "./components/layout/Nav.svelte";
    import Footer from "./components/layout/Footer.svelte";


    let page;
    let params;

    router('/', isLoggedIn, (ctx) => page = Home);
    router('/pokemon-cards', (ctx) => page = Pokemon);
    router('/pokemon-cards/create', (ctx) => page = Pokemon);
    router('/pokemon-cards/:id', (ctx) => {
        params = ctx.params;
        page = PokemonView;
    });
    router('/pokemon-cards/:id/edit', (ctx) => {
        params = ctx.params;
        page = PokemonEdit;
    });
    router('/users', (ctx) => page = Users);
    router('/login', (ctx) => page = Login);

    router.start();
</script>

<svelte:head>
    <title>Pokemon cards auction</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/fontawesome/css/all.css">
    <script src="/js/bootstrap.min.js" defer></script>
</svelte:head>

<Nav/>

<main class="bg-light py-5 min-vh-100">
    <section class="container py-5 px-2 px-md-5 mt-5 bg-white rounded shadow-sm">
        <svelte:component this="{page}" {params}/>
    </section>
</main>
<Footer/>
