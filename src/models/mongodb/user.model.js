import User from "../../schemas/mongoose/user.schema.js";

export class UserModel {
  static async getAll({ username }) {
    if (username) {
      return User.find({ username: { $regex: username, $options: "i" } });
    }
    const result = await User.find();
    return result;
  }
  static async getById({ id }) {
    return User.findById(id);
  }
  static async create({ result: user }) {
    const newUser = new User(user.data);
    return newUser.save();
  }
  static async update({ id, result }) {
    const updatedUser = await User.findByIdAndUpdate(id, result.data, {
      new: true,
    });
    if (!updatedUser) return false;
    return updatedUser;
  }
  static async delete({ id }) {
    const result = await User.findByIdAndDelete(id);
    if (!result) return false;
    return true;
  }
}
