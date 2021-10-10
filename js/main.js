'use strict';

const apiURL = 'https://api.tvmaze.com/search/shows?';

const hae = function (event) {
    event.preventDefault();
    $('#tulos').empty();
    //jos haluaa, että tulokset teksti näkyy
    //$('#tulos').append('<h1>Tulokset</h1>');
    //console.log( $(this).serialize() );
    $.getJSON(apiURL + $(this).serialize(), function (response) {
        //console.log(response);
        $.each(response, function (indeksi, sarja) {
            console.log(sarja.show);
            $('#tulos').append(`
            <div class="card border-warning mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-3">
            <img src="${sarja.show.image ? sarja.show.image.medium : 'icon.png'}" class="img-fluid rounded ms-2 mt-3 mb-3"
                alt="${sarja.show.name}">
        </div>
        <div class="col-md-9">
            <div class="card-body">
                <h5 class="card-title">${sarja.show.name ? sarja.show.name : ' '}</h5>
                <p class="card-text">${sarja.show.genres ? sarja.show.genres : ' '}</p>
                <a href="${sarja.show.officialSite ? sarja.show.officialSite : sarja.show.url}"
                    class="btn btn-warning">Kotisivut</a>
                <p class="card-text">${sarja.show.summary ? sarja.show.summary : ' '}</p>
            </div>
        </div>
    </div>
</div>`);
        });
    });
};

$('form').submit(hae);