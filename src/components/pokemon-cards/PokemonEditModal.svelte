<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="PokemonEditModal" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="PokemonEditModal">Edit auction: card.name</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="pokemon-name" class="col-form-label">Pokemon name:</label>
                        <input type="text" class="form-control" placeholder="Pokemon name" id="pokemon-name">

                        <label for="image-url" class="col-form-label">Image URL:</label>
                        <input type="text" class="form-control" placeholder="Image URL" id="image-url">

                        <label for="starting-amount" class="col-form-label">Starting amount:</label>
                        <input type="text" class="form-control" placeholder="Starting amount" id="starting-amount">

                        <label for="card-type" class="col-form-label">Card type:</label>
                        <input type="text" class="form-control" placeholder="Card type" id="card-type">

                        <label for="rarity" class="col-form-label">Rarity:</label>
                        <input type="text" class="form-control" placeholder="Rarity" id="rarity">

                        <label for="Element" class="col-form-label">Element:</label>
                        <input type="text" class="form-control" placeholder="Element" id="Element">

                        <label for="Weakness" class="col-form-label">Weakness:</label>
                        <input type="text" class="form-control" placeholder="Weakness" id="Weakness">

                        <label for="Resistance" class="col-form-label">Resistance:</label>
                        <input type="text" class="form-control" placeholder="Resistance" id="Resistance">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">Save <i class="far fa-check-square"></i></button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete <i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close <i class="fas fa-times"></i></button>
            </div>
        </div>
    </div>
</div>