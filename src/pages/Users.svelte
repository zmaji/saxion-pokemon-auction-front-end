<script>
    import { fade } from 'svelte/transition';
    import UserCard from "../components/users/UserCard.svelte";

    const fetchUsers = (async () => {
        console.log('Bearer ' + localStorage.getItem('token'))
        const response = await fetch(`http://localhost:3000/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        return await response.json();
    })();
</script>

{#await fetchUsers}
    <div class="alert alert-primary" role="alert">
        Fetching Users...
    </div>
{:then users}
    <div class="row" transition:fade>
        {#each users as user}
            <UserCard {user}/>
        {/each}
    </div>
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Users...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}