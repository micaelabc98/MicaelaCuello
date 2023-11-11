import crypto from 'crypto'

export class Producto {
    #id
  constructor({ id, title, description, price, thumbnail, code, stock }, encriptar = false) {
    this.id = notNUll(id)
    this.title = title  
    this.description = description  
    this.price = notNull (price)  
    this.thumbnail = notNull (thumbnail)  
    this.code = notNull (code)
    this.stock = notNull (stock)

  }

 export function notNull(valor){
    if (valor == null || valor == undefined) {
        throw new Error ('Valores erroneos');
    }
    return valor;
 }
  }
