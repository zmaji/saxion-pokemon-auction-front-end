<script>
    export let card = {};
</script>

<div class="col-12 col-md-6 col-lg-4 p-3">
    <div class="bg-white rounded border border-primary">
        <div class="d-flex justify-content-center py-2 position-relative">
            <div class="position-absolute end-0 me-2 z-index-1">
                <div class="d-flex flex-column bg-light rounded py-2 px-1 shadow-sm">
                    <button type="button" class="btn btn-primary text-white mb-2"><i class="fas fa-eye"></i></button>
                    <button type="button" class="btn btn-secondary text-white mb-2"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <img src="{card.imageURL}" alt="{card.name}">
        </div>
        <div class="p-3 alert-primary border-top border-4 border-primary">
            <h3>{card.name}</h3>
            <p>Starting amount: <span class="fw-bold">€ {card.startingAmount}</span></p>
            <hr>
            <div class="text-end">
                <small class="text-muted">Available until: {card.availabilityDate} <i class="far fa-calendar-alt"></i></small>
            </div>
        </div>

    </div>
</div>

<style>
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.24));
    }

    .z-index-1 {
        z-index: 1;
    }
</style>