import app from './app.js'

const port = process.env.PORT ?? 1234

app.listen(port)

console.log(`Server on >>> http://localhost:${port}`)