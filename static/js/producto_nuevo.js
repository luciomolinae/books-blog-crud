document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById('nombre');
    var precioInput = document.getElementById('precio');
    var stockInput = document.getElementById('stock');
    var imagenInput = document.getElementById('imagen');
    var grabarButton = document.getElementById('grabarButton');

    grabarButton.addEventListener('click', function () {
        // Obtener los valores del formulario
        var nombre = nombreInput.value;
        var precio = precioInput.value;
        var stock = stockInput.value;
        var imagen = imagenInput.value;

        // Crear un objeto con los datos del producto
        var producto = {
            nombre: nombre,
            precio: precio,
            stock: stock,
            imagen: imagen,
        };

        // Enviar la solicitud al servidor
        var url = 'http://localhost:5000/productos';  // Ajusta la URL según sea necesario
        var options = {
            body: JSON.stringify(producto),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
        };

        fetch(url, options)
            .then(() => {
                alert("Registro grabado");
                window.location.href = "./productos.html";
            })
            .catch(err => {
                console.error(err);
                alert("Error al Grabar");
            });
    });
});
