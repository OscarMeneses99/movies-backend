import {
  validatePartialSchema,
  validateSchema,
} from "../schemas/zod/user.schema.js";
import { UserModel } from "../models/mongodb/user.model.js";

export class UserController {
  static async getUsers(req, res) {
    const { username } = req.query;
    const users = await UserModel.getAll({ username });
    return res.status(200).json(users);
  }
  static async getUser(req, res) {
    const { id } = req.params;
    const user = await UserModel.getById({ id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  }
  static async createUser(req, res) {
    const result = validateSchema(req.body);
    if (!result.success) {
      return res.status(422).json({ errors: JSON.parse(result.error.message) });
    }
    const user = await UserModel.create({ result });
    return res.status(201).json(user);
  }
  static async updateUser(req, res) {
    const { id } = req.params;
    const result = validatePartialSchema(req.body);
    if (!result.success) {
      return res.status(422).json({ errors: JSON.parse(result.error.message) });
    }
    const updatedUser = await UserModel.update({ id, result });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(updatedUser);
  }
  static async deleteUser(req, res) {
    const { id } = req.params;
    const result = await UserModel.delete({ id });
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(204).json({ message: "User deleted" });
  }
}
