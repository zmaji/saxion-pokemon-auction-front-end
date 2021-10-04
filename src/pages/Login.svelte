<script>
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
    import tokenStore from "../stores/token";

    const form = useForm();

    let userEmail = "";
    let userPassword = "";
    let loggedIn = null;

    async function login() {
        const response = await fetch('http://localhost:3000/credentials', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        }).then(response => {
            if (response.status === 201) {
                response.json()
                    .then(json => {
                        if (json.token) {
                            localStorage.setItem("token", json.token);
                            localStorage.setItem("user", userEmail);
                            $tokenStore.token = json.token;
                            return loggedIn = true;
                        } else {
                            return loggedIn = false;
                        }
                    });
            } else {
                loggedIn = false
            }
        });
    }
</script>

<div class="d-flex justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
        <form use:form>
            <h1>Login</h1>

            <div class="mb-3">
                <label for="user-email" class="col-form-label">E-mail:</label>
                <input type="email" name="email" class="form-control" id="user-email" bind:value={userEmail} use:validators={[required, email]} />
                <HintGroup for="email">
                    <Hint on="required">This is a mandatory field</Hint>
                    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
                </HintGroup>
            </div>

            <div class="mb-3">
                <label for="password" class="col-form-label">Password:</label>
                <input type="password" name="password" class="form-control" id="password" bind:value={userPassword} use:validators={[required]} />
                <Hint for="password" on="required">This is a mandatory field</Hint>
            </div>

            {#if loggedIn === false}
                <div class="alert alert-danger">
                    Login failed, check the username and/or password
                </div>
            {:else if loggedIn === true}
                <div class="alert alert-success">
                    Logged in successfully, you can close this window
                </div>
            {/if}

            <button disabled={!$form.valid} on:click|preventDefault={login} class="btn btn-primary text-white">Login <i class="fas fa-sign-in-alt"></i></button>
        </form>
    </div>
</div>


<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>