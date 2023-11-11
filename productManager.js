import fs from 'fs/promises'
import { Product } from './Product.js'

export class ProductManager {
  #ruta

  constructor(ruta) {
    this.#ruta = ruta
  }
  async addProduct({title, description, price, thumbnail, code, stock}) {
    const products = JSON.parse(await fs.readFile(this.#ruta, 'utf-8'))
    
 
  async addProduct({ title, description, price, thumbnail, code, stock }) {
    const products = await this.getProducts();
    const productToAdd = products.find((product) => product.code === code);
    const id = crypto.randomUUID();
    const newProduct = new Product({
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });

    if (!productToAdd) {
      products.push(newProduct);
      await fs.writeFile(this.path, JSON.stringify(products, null, 2), "utf-8");
      return;
    }
    throw new Error(
      'EL producto con el codigo ${code} informado ya existe'
    );
  }

 
  async getProducts() {
    const data = await fs.readFile(this.path, "utf-8");
    return JSON.parse(data) || [];
  }

  
  async getProductById(id) {
    const products = await this.getProducts();
    const productToFind = products.find((p) => p.id === id);
    if (!productToFind) {
      throw new Error('El producto con id ${id} no existe');
    }
    return productToFind;
  }

  async updateProduct(id, newData) {
    const products = await this.getProducts();
    const productIndex = products.findIndex((i) => i.id === id);

    if (productIndex !== -1) {
      const product = products[productIndex];
      try {
        products[productIndex] = { ...product, ...newData };
        await fs.writeFile(
          this.path,
          JSON.stringify(products, null, 2),
          utf-8
        );
      } catch (error) {
        throw new Error(
          'Error al actualizar el producto, faltan campos a rellenar: ${error}'
        );
      }
      return;
    }
  }

  async deleteProduct(id) {
    const products = await this.getProducts();
    const productIndex = products.findIndex((i) => i.id === id);

    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      await fs.writeFile(this.path, JSON.stringify(products, null, 2), "utf8");
      return products;
    }
    throw new Error('El producto con id ${id} no se encuentra o no existe');
  }
}
