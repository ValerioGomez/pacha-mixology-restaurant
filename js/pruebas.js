document.addEventListener("DOMContentLoaded", function () {
    // Lista de nombres de archivos de imágenes en orden descendente
    var imagenes = [
        "34.jpg", "33.jpg", "32.jpg", "31.jpg", "30.jpg",
        "29.jpg", "28.jpg", "27.jpg", "26.jpg", "25.jpg",
        "24.jpg", "23.jpg", "22.jpg", "21.jpg", "20.jpg",
        "19.jpg", "18.jpg", "17.jpg", "16.jpg", "15.jpg",
        "14.jpg", "13.jpg", "12.jpg", "11.jpg", "10.jpg",
        "9.jpg", "8.jpg", "7.jpg", "6.jpg", "5.jpg",
        "4.jpg", "3.jpg", "2.jpg", "1.jpg"
    ];

    var galeria = document.getElementById('galeria');

    // Generar las tarjetas y modales dinámicamente
    for (var i = 0; i < imagenes.length; i++) {
        var imagen = imagenes[i];
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="#" data-toggle="modal" data-target="#exampleModal${i}">
                <img src="imagenes/comida/${imagen}" class="card-img-top">
            </a>
        `;
        galeria.appendChild(card);

        var modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = `exampleModal${i}`;
        modal.tabIndex = -1;
        modal.role = 'dialog';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body">
                        <img src="imagenes/comida/${imagen}" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        `;
        galeria.appendChild(modal);
    }
});
