<script>
    import {useForm, validators, HintGroup, Hint, email, required} from "svelte-use-form";
    import router from "page";
    let user = {};

    const form = useForm();

    let userFirstName = "";
    let userLastName = "";
    let avatar = "";
    let userEmail = "";
    let userPassword = "";
    let userCity = "";
    let userAddress = "";
    let userZipCode = "";

    async function postUser() {
        let formData = new FormData();
        formData.append("firstName", userFirstName);
        formData.append("lastName", userLastName);
        formData.append("avatar", avatar[0]);
        formData.append("email", userEmail);
        formData.append("password", userPassword);
        formData.append("city", userCity);
        formData.append("address", userAddress);
        formData.append("zipCode", userZipCode);

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: formData
            });

            console.log(response)
            if (response.status === 201) {
                router.redirect('/login')
            }
        } catch(error) {
            console.error(error);
        }
    }


</script>

<form use:form class="pb-3 d-flex justify-content-center">
    <div class="row g-3 col-md-8">
        <h1>Register</h1>
        <div class="col-12 col-md-6">
            <label for="first-name" class="col-form-label">First name:</label>
            <input type="text" name="first-name" class="form-control" placeholder="First name" id="first-name"
                   bind:value="{userFirstName}" use:validators={[required]}>
            <Hint for="first-name" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="last-name" class="col-form-label">Last name:</label>
            <input type="text" name="last-name" class="form-control" placeholder="Last name" id="last-name"
                   bind:value="{userLastName}" use:validators={[required]}>
            <Hint for="last-name" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="e-mail" class="col-form-label">E-mail:</label>
            <input type="email" name="e-mail" class="form-control" placeholder="E-mail" id="e-mail"
                   bind:value="{userEmail}" use:validators={[required, email]}>
            <HintGroup for="e-mail">
                <Hint on="required">This is a mandatory field</Hint>
                <Hint on="e-mail" hideWhenRequired>Email is not valid</Hint>
            </HintGroup>
        </div>

        <div class="col-12 col-md-6">
            <label for="password" class="col-form-label">Password:</label>
            <input type="password" name="password" class="form-control" placeholder="Last name" id="password"
                   bind:value="{userPassword}" use:validators={[required]}>
            <Hint for="password" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="formFile" class="col-form-label">Upload an avatar</label>
            <input class="form-control" name="avatar" type="file" id="formFile" bind:files="{avatar}"
                   use:validators={[required]}>
            <Hint for="avatar" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="city" class="col-form-label">City:</label>
            <input type="text" name="city" class="form-control" placeholder="City" id="city" bind:value="{userCity}"
                   use:validators={[required]}>
            <Hint for="city" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="address" class="col-form-label">Address:</label>
            <input type="text" name="address" class="form-control" placeholder="Address" id="address"
                   bind:value="{userAddress}" use:validators={[required]}>
            <Hint for="address" on="required">This is a mandatory field</Hint>
        </div>

        <div class="col-12 col-md-6">
            <label for="zipcode" class="col-form-label">Zipcode:</label>
            <input type="text" name="zipcode" class="form-control" placeholder="Zipcode" id="zipcode"
                   bind:value="{userZipCode}" use:validators={[required]}>
            <Hint for="zipcode" on="required">This is a mandatory field</Hint>
        </div>

        <div>
            <button type="button" class="me-2 btn btn-success text-white" onsubmit="return confirm('Do you really want to submit the form?');" on:click={postUser}>Register account <i class="far fa-check-square"></i></button>
            <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/users')}>Return <i class="fas fa-times"></i></button>
        </div>

    </div>
</form>

