
const catalogo = [
    {
        nombre: 'black widow remera',
        color: 'negro',
        precio: 1000,
        stock: 200,
        producto: 'remera'
    },
    {
        nombre: 'ultra white',
        color: 'blanco',
        precio: 1100,
        stock: 50,
        producto: 'remera'
    },
    {
        nombre: 'las que van',
        color: 'negro',
        precio: 300,
        stock: 100,
        producto: 'medias'
    },
    {
        nombre: 'sun-sun',
        color: 'negro',
        precio: 700,
        stock: 65,
        producto: 'gorra'
    },
    {
        nombre: 'corazon partido',
        color: 'azul',
        precio: 500,
        stock: 120,
        producto: 'picas'
    }
]

export const promise = (id) => {
    return new Promise((res, rej) => {
    setTimeout(()=>{
        res(catalogo)
    }, 1000)
})
}