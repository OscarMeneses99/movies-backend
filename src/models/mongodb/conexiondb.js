import mongoose from "mongoose"

export const ConnectDB = async () => {
    try {
        const user = process.env.USER_MONGO
        const password = process.env.PASSWORD_MONGO
        await mongoose.connect(`mongodb+srv://${user}:${password}@pub-irlandes.sslpdde.mongodb.net/movies-db?retryWrites=true&w=majority`)
        console.log('>>> DB is connected')
    } catch (error) {
        console.log(error)
    }
}