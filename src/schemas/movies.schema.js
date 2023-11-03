import z from "zod"

const movieSchema = z.object({
    title: z.string().min(1).max(255),
    year: z.number().int().min(1888).max(2024),
    director: z.string().min(1).max(255),
    duration: z.number().int().min(1).max(500),
    genre: z.array(
        z.enum(['Drama',
            'Action',
            'Crime',
            'Adventure',
            'Sci-Fi',
            'Romance',
            'Animation',
            'Biography',
            'Fantasy'])
    ),
    poster: z.string().url(),
    rate: z.number().min(0).max(10),
    synopsis: z.string(),
})

export function validateSchema(object) {
    return movieSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return movieSchema.partial().safeParse(object)
}