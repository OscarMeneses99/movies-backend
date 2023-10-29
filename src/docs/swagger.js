import swaggerJSDoc from 'swagger-jsdoc'

import app from '../app.js'

const apis = [
    './src/docs/*.yaml',
]

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movies API',
            version: '1.0.0',
            description: 'Busca, crea, actualiza y elimina películas. App desarrollada con Express y Swagger.',
        },
        servers: [
            {
                url: 'https://movies-backend.3.us-1.fl0.io/',
            },
        ],
    },
    apis: apis,
};

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec






