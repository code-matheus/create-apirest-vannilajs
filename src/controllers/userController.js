const UserModel = require('../models/userModel');

class UserController {
    static async getAllUsers(req, res) {
        const users = await UserModel.getAllUsers();
        res.json(users);
    }
    static async getUserById(req, res) {
        const user = await UserModel.getUserbyId(req.params.id);
        res.json(user);
    }
    static async createUser(req, res) {
        const newUser = await UserModel.createUser(req.body);
        res.status(201).json(newUser);
    }
    static async updateUser(req, res) {
        const updatedUser = await UserModel.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    }
    static async deleteUser(req, res) {
        const success = await UserModel.deleteUser(req.params.id);
        res.status(success ? 204 : 404).end();
    }
}

module.exports = UserController