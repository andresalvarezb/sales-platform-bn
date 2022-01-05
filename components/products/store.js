const ProductModel = require("./model");

class ProductDB {
    constructor() {

    }

    async getProducts() {
        const products = await ProductModel.find();
        return products;
    }

    async getProduct(productId) {
        const product = await ProductModel.findById(productId);
        return product;
    }

    addProduct(product) {
        const newProduct = new ProductModel(product);
        newProduct.save();
    }

    async updateProduct(productId, productParams) {
        const product = await ProductModel.findByIdAndUpdate(productId, {
            ...productParams
        })
        return product;
    }

    async updateProductByParams(productId, productParams) {
        const product = await ProductModel.findByIdAndUpdate(productId, {
            ...productParams
        });
        return product;
    }
    async deleteProduct(productId) {
        const product = await ProductModel.findByIdAndDelete(productId);
        return product;
    }
}

module.exports = ProductDB;
