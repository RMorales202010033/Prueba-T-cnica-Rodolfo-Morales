const MyApp= require('./app.js')

const port=5000

MyApp.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto: ${port}`)
})
