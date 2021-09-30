<script>
    let userName = "";
    let userPassword = "";
    let loggedIn = null;

    async function login() {
        const response = await fetch('http://localhost:3000/credentials', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                email: userName,
                password: userPassword
            })
        }).then(response => {
            if (response.status === 201) {
                response.json()
                    .then(json => {
                        if (json.token) {
                            localStorage.setItem("token", json.token);
                            localStorage.setItem("user", userName);
                            return loggedIn = true;
                        } else {
                            return loggedIn = false;
                        }
                    });
            } else {
                loggedIn = false
            }
        })
    }
</script>


<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Login into your account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="username" class="col-form-label">Username:</label>
                        <input type="text" class="form-control" id="username" bind:value={userName}>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="col-form-label">Password:</label>
                        <input type="password" class="form-control" id="password" bind:value={userPassword}>
                    </div>
                </form>

                {#if loggedIn === false}
                    <div class="alert alert-danger">
                        Login failed, check the username and/or password
                    </div>
                {:else if loggedIn === true}
                    <div class="alert alert-success">
                        Logged in successfully, you can close this window
                    </div>
                {/if}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close <i class="fas fa-times"></i></button>
                {#if !loggedIn}
                    <button on:click={login} class="btn btn-primary text-white">Login <i class="fas fa-sign-in-alt"></i></button>
                {/if}
            </div>
        </div>
    </div>
</div>