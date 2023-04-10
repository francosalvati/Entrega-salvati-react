
const catalogo = [
    {
        id: '1',
        nombre: 'Black widow remera',
        color: 'negro',
        precio: 1000,
        stock: 200,
        producto: 't-shirt',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/845/336/products/negra-social-atras111-955069cb5989cddd3816700060505334-640-0.jpg',
        descrpcion: ''
    },
    {
        id: '2',
        nombre: 'Ultra white',
        color: 'blanco',
        precio: 1100,
        stock: 50,
        producto: 't-shirt',
        img: 'https://thejuice.com.ar/wp-content/uploads/2022/09/LUV9199-scaled.jpg',
        descrpcion: ''
    },
    {
        id: '3',
        nombre: 'Zebra',
        color: 'negro',
        precio: 300,
        stock: 100,
        producto: 'socks',
        img: 'https://i.pinimg.com/564x/e6/23/d5/e623d5bb0c09eca6778c042ee238b948.jpg',
        descrpcion: ''
    },
    {
        id: '4',
        nombre: 'Sun-sun',
        color: 'negro',
        precio: 700,
        stock: 65,
        producto: 'cap',
        img: 'https://i.pinimg.com/564x/22/93/4c/22934c0e4409ba92191e507b389a1406.jpg',
        descrpcion: ''
    },
    {
        id: '5',
        nombre: 'Spice Grinder',
        color: ['blanco', 'rosa', 'gris'],
        precio: 500,
        stock: 120,
        producto: 'grinder',
        img: 'https://i.pinimg.com/564x/dd/18/d3/dd18d3db04ecd2836fa94af9c5629833.jpg',
        descrpcion: ''
    }
]

export let promise = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(id ? catalogo.find(prod => prod.id === id) : catalogo)
            console.log(id)
        }, 1000)
    })
}