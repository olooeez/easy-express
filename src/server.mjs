import express, { json, urlencoded } from 'express'
import { getProducts, getProduct, saveProduct, deleteProduct } from './database.mjs'

const port = 3003
const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.get("/produtos", (_req, res, _next) => {
    res.send(getProducts())
})

app.get("/produtos/:id", (req, res, _next) => {
    res.send(getProduct(req.params.id))
})

app.post("/produtos/:id", (req, res, _next) => {
    const product = saveProduct({
        nome: req.body.nome,
        preco: req.body.preco,
        id: parseInt(req.params.id),
    })

    res.send(product)
})

app.delete("/produtos/:id", (req, res, _next) => {
    const product = deleteProduct(req.params.id)

    res.send(product)
})

app.post("/produtos", (req, res, _next) => {
    const product = saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(product)
})

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}`)
})
