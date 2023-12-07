const { createApp } = Vue;

createApp({
    data() {
        return {
            productos: [],
            url: 'http://localhost:5000/productos', // Actualiza la URL según sea necesario
            error: false,
            cargando: true,
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#visualizar_productos');