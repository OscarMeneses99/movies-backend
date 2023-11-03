import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    id: {
        type: String,

    },
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    year: {
        type: Number,
        required: true,
        min: 1888,
        max: 2024
    },
    director: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 500
    },
    genre: {
        type: [String],
        required: true,
        enum: ['Drama',
            'Action',
            'Crime',
            'Adventure',
            'Sci-Fi',
            'Romance',
            'Animation',
            'Biography',
            'Fantasy']
    },
    poster: {
        type: String,
        required: true,
        url: true
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    synopsis: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000
    },
},
    {
        timestamps: true
    })

export default mongoose.model('Movie', MovieSchema)