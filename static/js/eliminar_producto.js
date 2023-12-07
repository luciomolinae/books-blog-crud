document.addEventListener('DOMContentLoaded', function () {
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');

    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', function () {
            const idProducto = this.dataset.id;
            eliminarProducto(idProducto);
        });
    });

    function eliminarProducto(id) {
        // Realizar una solicitud DELETE al servidor
        fetch(`http://localhost:5000/productos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al eliminar producto: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Producto eliminado:', data);
            // Puedes realizar acciones adicionales después de eliminar el producto
            alert('Producto eliminado exitosamente');
            // Recarga la página para reflejar los cambios
            location.reload();
        })
        .catch(error => {
            console.error('Error al eliminar el producto:', error);
            alert('Error al eliminar el producto');
        });
    }
});