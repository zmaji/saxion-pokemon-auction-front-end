<script>
    import router from "page";
    import {onMount} from "svelte";
    import auctionsStore from "../../stores/auctions";
    export let card = {};

    export let params;
    let cardId;

    onMount(() => {
        cardId = parseInt(params.id);
        let items = $auctionsStore.auctions;
        console.log(items);
        let item = items.find(card => card.cardID === cardId);
        console.log(item);
        startTimer;
    });

    let timer = "";

    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    let startTimer = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="CountdownTimer"
        timer = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            timer = "EXPIRED";
        }
    }, 1000);

    export let bid = {};

    const fetchBidOwner = (async () => {
        console.log('Bearer ' + localStorage.getItem('token'))
        const response = await fetch(`http://localhost:3000/users/${bid.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return await response.json();
    })();
</script>

<div class="row">
    <div class="col-12">
        <h3>Pikachu</h3>
    </div>
    <hr>
    <div class="col-12 col-md-6">
        <img src="https://den-cards.pokellector.com/119/Pikachu.BS.58.png" alt="Pikachu">
    </div>
    <div class="col-12 col-md-6">
        <div class="d-flex flex-column px-5 px-md-0 py-4">
            <h6>Card type:</h6>
            <p>test</p>

            <h6>Element:</h6>
            <p>test</p>

            <h6>Weakness:</h6>
            <p>test</p>

            <h6>Resistance:</h6>
            <p>test</p>

            <h6>Available until: Date</h6>
            <div class="d-flex align-items-center">
                <i class="fas fa-hourglass-half pe-2"></i>
                <p class="mb-0" id="CountdownTimer">{timer}</p>
            </div>
        </div>

        <!-- Option to have items centered -->
        <!--        <div class="pt-3 pt-lg-4">-->
        <!--            <h6>Available until: Date</h6>-->
        <!--            <i class="fas fa-hourglass-half pb-2"></i>-->
        <!--            <p id="CountdownTimer"></p>-->
        <!--        </div>-->
        <!-- Option to have items centered but div aligned left -->
        <!--        <div class="pt-3 pt-lg-4 d-flex justify-content-start">-->
        <!--            <div class="d-flex flex-column align-items-center">-->
        <!--                <h6>Available until: Date</h6>-->
        <!--                <i class="fas fa-hourglass-half pb-2"></i>-->
        <!--                <p id="CountdownTimer"></p>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
    <div class="col-12 col-md-6 mb-3">
        <h3>Place bid:</h3>
        <div class=" input-group">
            <input type="text" class="form-control" placeholder="Bid amount" id="bid-amount">
            <button type="submit" class="btn btn-success text-white">Place bid</button>

        </div>
    </div>
    <h3 class="pt-2 ps-3">Current bids:</h3>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 px-3 py-2">
        <div class="{bid.hasWon ? 'alert alert-primary border-2 border-primary' : 'alert alert-secondary'} rounded shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">€ test</h4>
                <small class="">Placed by: test</small>
            </div>
        </div>
    </div>
    <hr>
    <div class="col-12 d-flex justify-content-between">
        <div class="text-start">
            <!-- If (loggedIn && admin) statement -->
            <button type="button" class="btn btn-primary text-white me-2" on:click={() => router.redirect(`/pokemon-cards/${card.cardID}/edit`)}>Edit <i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
        </div>

        <!-- Endif -->
        <div class="text-end">
            <button type="button" class="btn btn-secondary " on:click={() => router.redirect('/pokemon-cards')}>Return <i class="fas fa-times"></i></button>
        </div>
    </div>
</div>

<style>
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.24));
    }
</style>
