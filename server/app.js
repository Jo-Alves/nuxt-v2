const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get("/services", (req, res) => {
    const services = [
        {
            id: 1,
            name: "Desenvolvimento de software",
            price: 10000
        }
        , {
            id: 2,
            name: "Marketing Digital",
            price: 5000
        }
    ]

    res.status(200).send(services)
})

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Notebook",
            description: "Windows 11, tela led 1300 x 720px, 16GB RAM, 2TB HD",
            price: 2499.99
        }
        , {
            id: 2,
            name: "Celular",
            description: "Samsung, Android 11, tela led 5 polegada",
            price: 1200
        }
        , {
            id: 3,
            name: "Tablet",
            description: "LG, Android 10, tela led 15 polegada",
            price: 1200
        }
    ]

    res.status(200).send(products)
})

app.listen(3001, () => {
    console.log("Servidor rodando...")
})