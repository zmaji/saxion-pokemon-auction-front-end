<script>
    import LoginModal from "./LoginModal.svelte";

    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

    let btnValue = user;

    const handleMouseOver = () => btnValue = "Logout";
    const handleMouseOut = () => btnValue = user;

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        user = null;
    };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-top border-4 border-primary shadow">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="/img/logo.png" alt="" width="100">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Pokemon cards</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Users</a>
                </li>
            </ul>
            {#if user}
                <button class="btn btn-outline-secondary" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} on:focus={logout}>{btnValue}</button>
            {:else}
                <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">Login <i class="fas fa-sign-in-alt"></i></button>
            {/if}
        </div>
    </div>
</nav>

<LoginModal/>
