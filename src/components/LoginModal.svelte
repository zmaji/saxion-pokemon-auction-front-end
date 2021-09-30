<script>
    let userName = "";
    let userPassword = "";


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
        }).then(response => response.json())
            .then(json => {
                if (json.token) {
                    localStorage.setItem("token", json.token);
                    localStorage.setItem("user", userName);
                }
            });
    }

</script>


<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
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
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button on:click={login} class="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
</div>