<script>
    export let user = {};
</script>

<div class="col-12 col-md-5 p3 pb-3">
    <div class="bg-white border border-primary rounded p-3 d-flex">
        <div class="row">
            <div class="col-12 col-lg-6">
                <img class="user-image" src="{user.avatar}" alt="{user.firstName + ' ' + user.lastName}">
            </div>
            <div class="col-12 col-lg-6">
                <h3>{user.firstName + " " + user.lastName}</h3>
                <p>{user.email}</p>
                <span>Role:
<!--                    svelte loop from https://stackoverflow.com/questions/67560330/javascript-array-display-elements-with-a-comma-between-elements-how-do-i-change-->
                {#each user.roles as role, i}
                    { i === user.roles.length-1 ? role : `${role}, `}
                {/each}
                </span>
            </div>
        </div>
    </div>
</div>

<style>
    .user-image {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
</style>
