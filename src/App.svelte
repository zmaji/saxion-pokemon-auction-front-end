<script>
    import jwt_decode from "jwt-decode";
    import tokenStore from "./stores/token";
    import rolesStore from "./stores/roles";

    import router from "page";
    import Home from "./pages/Home.svelte";
    import Pokemon from "./pages/PokemonCards.svelte";
    import Users from "./pages/Users.svelte";
    import PokemonView from "./components/pokemon-cards/PokemonView.svelte";
    import Login from "./pages/Login.svelte";
    import PokemonEdit from "./pages/PokemonEdit.svelte";
    import PokemonCreate from "./pages/PokemonCreate.svelte";
    import Register from "./pages/Register.svelte";

    // Middleware
    import isLoggedIn from "./middleware/isLoggedIn";
    import isAdmin from "./middleware/isAdmin";

    // Layout components
    import Nav from "./components/layout/Nav.svelte";
    import Footer from "./components/layout/Footer.svelte";

    let localToken = localStorage.getItem("token");
    if (localToken && localToken.length) {
        $tokenStore.token = localToken;
        $rolesStore.roles = jwt_decode(localToken).roles;

    } else {
        $tokenStore.token = "";
        $rolesStore.roles = [];
    }

    let page;
    let params;

    router('/', isLoggedIn, (ctx) => page = Home);
    router('/pokemon-cards', (ctx) => page = Pokemon);
    router('/pokemon-cards/create', isLoggedIn, isAdmin, (ctx) => page = PokemonCreate);
    router('/pokemon-cards/:id', (ctx) => {
        params = ctx.params;
        page = PokemonView;
    });
    router('/pokemon-cards/:id/edit', isLoggedIn, isAdmin, (ctx) => {
        params = ctx.params;
        page = PokemonEdit;
    });
    router('/users', isLoggedIn, isAdmin, (ctx) => page = Users);
    router('/login', (ctx) => page = Login);
    router('/register', (ctx) => page = Register);

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
