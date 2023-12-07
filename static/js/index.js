// Agrega libros estáticos
const booksData = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 2, titulo: "1984", autor: "George Orwell" },
    { id: 3, titulo: "Matar a un ruiseñor", autor: "Harper Lee" },
    { id: 4, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
    { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { id: 6, titulo: "Crimen y castigo", autor: "Fiodor Dostoievski" },
    { id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    { id: 8, titulo: "La Odisea", autor: "Homero" },
    { id: 9, titulo: "Rayuela", autor: "Julio Cortázar" },
    { id: 10, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { id: 11, titulo: "Anna Karenina", autor: "León Tolstói" },
    { id: 12, titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde" },
    { id: 13, titulo: "En busca del tiempo perdido", autor: "Marcel Proust" },
    { id: 14, titulo: "La metamorfosis", autor: "Franz Kafka" },
    { id: 15, titulo: "Mujer en punto cero", autor: "Nawal El Saadawi" },
    { id: 16, titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { id: 17, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" },
    { id: 18, titulo: "Matar a un ruiseñor", autor: "Harper Lee" },
    { id: 19, titulo: "La naranja mecánica", autor: "Anthony Burgess" },
    { id: 20, titulo: "En el camino", autor: "Jack Kerouac" },
    { id: 21, titulo: "La isla del tesoro", autor: "Robert Louis Stevenson" },
    { id: 22, titulo: "El perfume", autor: "Patrick Süskind" },
    { id: 23, titulo: "Los miserables", autor: "Víctor Hugo" },
    { id: 24, titulo: "Drácula", autor: "Bram Stoker" },
    { id: 25, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" },
    { id: 26, titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari" },
    { id: 27, titulo: "Breve historia del tiempo", autor: "Stephen Hawking" },
    { id: 28, titulo: "El poder del ahora", autor: "Eckhart Tolle" },
    { id: 29, titulo: "En el camino", autor: "Jack Kerouac" },
    { id: 30, titulo: "El arte de amar", autor: "Erich Fromm" },
    { id: 31, titulo: "Cosmos", autor: "Carl Sagan" },
    { id: 32, titulo: "El hombre en busca de sentido", autor: "Viktor Frankl" },
    { id: 33, titulo: "Malcolm X: Autobiografía", autor: "Malcolm X y Alex Haley" },
    { id: 34, titulo: "Steve Jobs", autor: "Walter Isaacson" },
    { id: 35, titulo: "Cuentos de la Alhambra", autor: "Washington Irving" },
    { id: 36, titulo: "El diario de Ana Frank", autor: "Ana Frank" },
    { id: 37, titulo: "Sobre la brevedad de la vida", autor: "Séneca" },
    { id: 38, titulo: "El mundo como voluntad y representación", autor: "Arthur Schopenhauer" },
    { id: 39, titulo: "Una breve historia del tiempo", autor: "Stephen Hawking" },
    { id: 40, titulo: "El contrato social", autor: "Jean-Jacques Rousseau" },
    { id: 41, titulo: "El arte de la guerra", autor: "Sun Tzu" },
    { id: 42, titulo: "El corazón de las tinieblas", autor: "Joseph Conrad" },
    { id: 43, titulo: "Yo sé por qué canta el pájaro enjaulado", autor: "Maya Angelou" },
    { id: 44, titulo: "Una historia del mundo en 10 capítulos y medio", autor: "Julian Barnes" },
    { id: 45, titulo: "El príncipe", autor: "Maquiavelo" },
    { id: 46, titulo: "Hacia rutas salvajes", autor: "Jon Krakauer" },
    { id: 47, titulo: "Breve historia de casi todo", autor: "Bill Bryson" },
    { id: 48, titulo: "El contrato social", autor: "Jean-Jacques Rousseau" },
    { id: 49, titulo: "Cosmos", autor: "Carl Sagan" },
    { id: 50, titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari" },
];


const app = Vue.createApp({
    data() {
      return {
        searchQuery: '',
        books: booksData,
      };
    },
    computed: {
      filteredBooks() {
        // Filtra libros basados en la búsqueda
        return this.books.filter(book =>
          book.titulo.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      searchBooks() {
        // Realiza la búsqueda cuando el usuario hace clic en el botón
        // Puedes realizar aquí una llamada a la API si es necesario
      },
    },
  });

  app.mount('#app');