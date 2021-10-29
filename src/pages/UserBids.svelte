<script>
    import jwt_decode from "jwt-decode";
    import tokenStore from "../stores/token";
    import { fade } from 'svelte/transition';
    import Bid from "../components/bids/Bid.svelte";


    let tokenPayload = jwt_decode($tokenStore.token);
    console.table(tokenPayload);

    console.log(tokenPayload.userID);
    const fetchUserBids = (async () => {
        const response = await fetch(`http://localhost:3000/users/${tokenPayload.userID}/bids`, {
            headers: {
                'Authorization': 'Bearer ' + $tokenStore.token
            }
        });
        const result = await response.json();
        console.log(result);
        return result;
    })();

</script>

<h1>Bids of user {tokenPayload.email}</h1>
<hr>

{#await fetchUserBids}
    <div class="alert alert-primary" role="alert">
        Fetching Bids...
    </div>
{:then bids}
    <h2>Bids you've won</h2>
    <div class="row pb-3" transition:fade>
        {#each bids as bid}
            {#if bid.hasWon}
                <Bid {bid}/>
            {/if}
        {/each}
    </div>

    <h2>Other bids</h2>
    <div class="row">
        {#each bids as bid}
            {#if !bid.hasWon}
                <Bid {bid}/>
            {/if}
        {/each}
    </div>
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Cards...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}