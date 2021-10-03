<script>
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content rounded">
            <div class="modal-header text-center">
                <h3 class="w-100">Auction Title</h3>
            </div>
            <div class="modal-body mt-4 mb-4 row">
                <div class="col">
                    <img src="https://den-cards.pokellector.com/119/Pikachu.BS.58.png" alt="Pikachu">
                </div>
                <div class="col mb-2">
                    <h5>Card type:</h5>
                    <div class="mb-2">test</div>

                    <div class="col mb-5">
                        <h5>Element:</h5>
                        <div class="mb-2">test</div>

                        <div class="col mb-2">
                            <h5>Weakness:</h5>
                            <div class="mb-2">test</div>

                            <div class="col mb-2">
                                <h5>Resistance:</h5>
                                <div class="mb-2">test</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3 w-100">
                    <h5>Available until: Date</h5>
                    <i class="fas fa-hourglass-half"></i>
                    <p id="CountdownTimer"></p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .color-block-gray {
        background-color: #a4a4a4;
    }
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.24));
        perspective: 900px;
    }
</style>