<script>
    import router from "page";
    import tokenStore from "../../stores/token";
    import rolesStore from "../../stores/roles";


    const logout = () => {
        $tokenStore.token = "";
        $rolesStore.roles = [];
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.redirect('/login');
    };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-top border-4 border-primary shadow">
    <div class="container">
        <a class="navbar-brand" on:click={() => router.redirect('/')}>
            <img src="/img/logo.png" alt="" width="100">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link {location.href === 'http://localhost:5000/' ? 'active' : ''}" on:click={() => router.redirect('/')}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {location.href === 'http://localhost:5000/pokemon-cards' ? 'active' : ''}" on:click={() => router.redirect('/pokemon-cards')}>Pokemon cards</a>
                </li>
                {#if $rolesStore.roles.indexOf('admin') !== -1}
                <li class="nav-item">
                    <a class="nav-link {location.href === 'http://localhost:5000/users' ? 'active' : ''}" on:click={() => router.redirect('/users')}>Users</a>
                </li>
                {/if}
            </ul>
            <div class="pe-3">
                <button class="btn btn-outline-secondary mb-2 mb-lg-0" on:click={() => router.redirect('/register')}>Register <i class="fas fa-user-plus"></i></button>
            </div>
            {#if $tokenStore.token}
                <button class="btn btn-outline-secondary" on:click={logout}>Logout</button>
            {:else}
                <button class="btn btn-outline-secondary" on:click={() => router.redirect('/login')}>Login <i class="fas fa-sign-in-alt"></i></button>
            {/if}
        </div>
    </div>
</nav>