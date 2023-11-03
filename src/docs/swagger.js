import swaggerJSDoc from 'swagger-jsdoc'

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
                url: 'http://localhost:3000',
                description: 'Servidor local',  
            },
            {
                url: 'https://movies-backend.3.us-1.fl0.io/',
                description: 'Servidor remoto',
            }
        ],
    },
    apis: ['./src/docs/swagger-doc.yaml'],
};

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec