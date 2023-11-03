import app from './app.js'
import { ConnectDB } from './models/mongodb/conexiondb.js'

ConnectDB()
const PORT = process.env.PORT ?? 3000

app.listen(PORT)

console.log(`Docs on >>> http://localhost:${PORT}/api-docs`)
console.log(`Server on >>> http://localhost:${PORT}/api/movies`)
