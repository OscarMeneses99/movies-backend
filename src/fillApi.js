import axios from "axios";
import express from "express";

const app = express();

// Configuración de la API
const apiUrl = "https://movies-backend.3.us-1.fl0.io"; // Cambia la URL según tu configuración
const endpoint = "/api/movies";
// Lee el archivo JSON
import data from "./newMovies.json" assert { type: "json" };

// Llena la API con los datos del archivo JSON
async function fillApi() {
  for (const item of data) {
    try {
      // Realiza una solicitud POST a la API
      const response = await axios.post(`${apiUrl}${endpoint}`, item);
      console.log(`Datos agregados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error(`Error al agregar datos: ${error.message}`);
    }
  }
}

// Inicia el servidor Express (opcional, solo si necesitas un servidor para la API)
const port = 3001; // Puerto para el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
  fillApi(); // Llena la API después de iniciar el servidor
});
