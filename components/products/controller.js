const ProductDB = require("./store");
const store = new ProductDB();
class ProductController {
    constructor(){
    }

    getProducts() {
        return new Promise((resolve, reject) => {
            const products = store.getProducts();
            products ? resolve(products) : reject('There aren\'t products');
        })
    }

    getProduct(productId) {
        return new Promise((resolve, reject) => {
            const product = store.getProduct(productId)
            product ? resolve(product) : reject('There is no product');
        })
    }

    addProduct(product) {
        return new Promise((resolve, reject) => {
            if (!product) reject('Invalid product');
            resolve(product);
            store.addProduct(product);
        })
    }

    updateProduct(productId, productParams) {
        return new Promise((resolve, reject) => {
            if (!productId || !productParams) reject('Invalid data');
            const product = store.updateProduct(productId, productParams);
            resolve(product);
        })
    }

    updateProductByParams(productId, productParams) {
        return new Promise ((resolve, reject) => {
            if (!productId || ! productParams) reject('Id or product fields are empty');
            const product = store.updateProductByParams(productId, productParams);
            resolve(product)
        })
    }

    deleteProduct(productId) {
        return new Promise((resolve, reject) => {
            if (!productId) reject('there is not ID');
            const product = store.deleteProduct(productId);
            resolve(product);
        })
    }
}

module.exports = ProductController;
