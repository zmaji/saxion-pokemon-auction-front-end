<script>
    export let bid = {};

    const fetchBidOwner = (async () => {
        console.log('Bearer ' + localStorage.getItem('token'))
        const response = await fetch(`http://localhost:3000/users/${bid.userID}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            });
        return await response.json();
    })();
</script>

{#await fetchBidOwner}
    <div class="alert alert-primary" role="alert">
        Fetching Bid...
    </div>
{:then bidOwner}
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-0">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ {bid.bidPrice}</h4>
                <small class="">Placed by: {bidOwner.email}</small>
            </div>
        </div>
    </div>
{:catch error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Failed to fetch Cards...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
{/await}

