import Movie from "../../schemas/mongoose/movie.schema.js";

export class MovieModel {
  static async getAll({ genre, title }) {
    if (title) {
      return Movie.find({ title: { $regex: title, $options: "i" } });
    }
    if (genre) {
      return Movie.find({ genre: { $in: genre } });
    }
    const result = await Movie.find();
    return result;
  }

  static async getById({ id }) {
    return Movie.findById(id);
  }

  static async create({ result: movie }) {
    const newMovie = new Movie(movie.data);
    return newMovie.save();
  }

  static async update({ id, result }) {
    const updatedMovie = await Movie.findByIdAndUpdate(id, result.data, {
      new: true,
    });
    if (!updatedMovie) return false;
    return updatedMovie;
  }

  static async delete({ id }) {
    const result = await Movie.findByIdAndDelete(id);
    if (!result) return false;
    return true;
  }
}
