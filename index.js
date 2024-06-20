const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) =>{
    res.send("Hola Calculadora")
})

/*const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`SUMA: ${sumando1} + ${sumando2} = ${resultado}`)
}

calculadoraBackend.get("/calculo", suma)


calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)

})*/

const multiplicacion = (req, res) => {
    var multiplicando1 = Number(req.query.parametro1)
    var multiplicando2 = Number(req.query.parametro2)
    var resultado = multiplicando1 * multiplicando2
    
    res.send(`${resultado}`)
}

calculadoraBackend.get("/multiplicar", multiplicacion)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})


