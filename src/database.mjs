const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function saveProduct(product) {
    if (!product.id) {
        product.id = sequence.id
    }

    products[product.id] = product
    return product
}

function getProduct(id) {
    return products[id] || {}
}

function getProducts() {
    return Object.values(products)
}

function deleteProduct(id) {
    const productDeleted = products[id]

    delete products[id]

    return productDeleted
}

export { saveProduct, getProduct, getProducts, deleteProduct }
