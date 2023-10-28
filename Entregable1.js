# MicaelaCuello
function notNUll(valor) {
    if (valor === null || valor === undefined){
        throw new Error ('el valor no puede ser null')
    }
    return valor
}

class product {
    constructor ({title, description, price, thumbnail, code, stock }) {
        this.title = title  
        this.description = description  
        this.price = notNull (price)  
        this.thumbnail = notNull (thumbnail)  
        this.code = notNull (code)
        this.stock = notNull (stock)

        if (code <= 0) throw new Error ('el codigo debe ser mayor a 0')
        this.#code = code
        this.#product = product
    }

    agregarProducto (idProduct) {
        if (this.#product.includes.(idProduct))
        this.#product.push(IdProduct)
    }
}

console.log(product)

const productManager = new productManager(product)
console.log(productManager)

class addProduct {
   #product
   constructor(){
    this.#product = []
   }

   getProduct() {
        return console.log(this.product)
   }

   agregarCode({idProduct, idCode}) {
    const product = this.#product.find( e => e.id === idProduct)
    if (!product) throw new Error ('El producto ${idProduct} no existe')
    product.agregarProducto(idCode)
   }
}

getProductById{
    const buscoProducto = this. product.find (e=>e.id===id)
    if(!buscoProducto){
        throw new Error ('este producto no existe en el stock')
    }
    return console.log('producto localizado')
}

const em = new productManager ([])

const addProduct = {
    title: 'cuaderno',
    description: 'cincuenta hojas',
    price: 1000,
    thumbnail: 'no image',
    code: 123456,
    stock: 10
}

em.getProduct()

em.getProductById()
