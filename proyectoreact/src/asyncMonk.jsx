

const products = [
    {
        id: '1',
        name: 'Bandeja Cuadrada',
        price: 750,
        category: 'bandeja',
        img:'../multimedia/bandejacuadrada.jpeg',
        stock: 10,
        description: 'Bandeja de cemento cuadrada 20x20',
    },
    
   {id:'2', name:'Bandeja Arcoiris', price: 1100, category: 'bandeja', img: '../multimedia/bandejaarcoiris.jpeg',stock: 15, description:'Bandeja de cemento con forma de arcoiris'},
   {id:'3', name:'Bandeja Rectangular', price: 1000, category: 'bandeja', img: '../multimedia/bandejarectangular.jpeg', stock: 15, description:'Bandeja de cemento rectángular 20x10'},
   {id:'4', name:'Bandeja Ovalada', price: 1100, category: 'bandeja', img:'../multimedia/bandejaovalada.jpeg', stock: 15, description:'Bandeja de cemento con forma ovalada'},
   {id:'5', name:'Vela Flor', price: 800, category: 'vela', img: '../multimedia/velaflor.jpeg', stock: 15, description:'Vela Flor, disponible en varios aromas y tonos.'},
   {id:'6', name:'Vela Bubble', price: 1100, category: 'vela', img: '../multimedia/velabubble.jpeg', stock: 15, description:'Vela Bubble, disponible en varios aromas y tonos.'},
   {id:'7', name:'Vela Nudo de Lana', price: 1100, category: 'vela', img: '../multimedia/velanudo.jpeg', stock: 15, description:'Vela Nudo de lana, disponible en varios aromas y tonos.'},
   {id:'8', name:'Vela Pera', price: 1100, category: 'vela', img: '../multimedia/velapera.jpeg', stock: 15, description:'Vela Pera, disponible en varios aromas y tonos.'},
   {id:'9', name:'Lampara Flor', price: 5000, category: 'lampara', img: '../multimedia/lamparaflor.jpeg', stock: 15, description:'Lámpara Flor con base de cemento, incluye el foco.'},
   {id:'10', name:'Lampara Cilindro', price: 5000, category: 'lampara', img: '../multimedia/lampara.jpeg', stock: 15, description:'Lámpara Cilindro con base de cemento, incluye el foco.'},
   {id:'11', name:'Lampara Taco', price: 5000, category: 'lampara', img: '../multimedia/lamparacircular.jpeg', stock: 15, description:'Lámpara Taco con base de cemento, incluye el foco.'},
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout (()=> {
            resolve(products)
        },500)
        })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout (()=>{
            resolve (products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category));
      }, 500);
    });
  };