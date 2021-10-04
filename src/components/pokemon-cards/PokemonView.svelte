<script>
    import {onMount} from "svelte";

    export let params;
    let cardId;

    onMount(() => {
        cardId = params.id;
    });

    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("CountdownTimer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("CountdownTimer").innerHTML = "EXPIRED";
        }
    }, 1000);
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
                <p class="mb-0" id="CountdownTimer"></p>
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

    <hr>
    <div class="col-12">
        <!-- If (loggedIn && admin) statement -->
        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">Edit <i
                class="fas fa-times"></i></button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete <i class="fas fa-times"></i>
        </button>
        <!-- Endif -->

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close <i class="fas fa-times"></i>
        </button>
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
