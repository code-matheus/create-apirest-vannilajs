const db = require('../config/db');

class UserModel {
    static async getAllUsers() {
        const result = await db.query(
            'SELECT * FROM users'
        );
        return result.rows;
    }
    static async getUserbyId(id) {
        const result = await db.query(
            'SELECT * FROM users WHERE id = $1', [id]
        );
        return result.rows[0];
    }
    static async createUser(info) {
        const result = await db.query(
            'INSERT INTO users (name, email, password, cpf, phone, birthdate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [info.name, info.email, info.password, info.cpf, info.phone, info.birthdate]
        );
        return result.rows[0];
    }
    static async updateUser(id, info) {
        const result = await db.query(
            'UPDATE users SET name = $1, email = $2, password = $3, cpf = $4, phone = $5, birthdate = $6 WHERE id = $7 RETURNING *',
            [info.name, info.email, info.password, info.cpf, info.phone, info.birthdate, id]
        );
        return result.rows[0];
    }
    static async deleteUser(id) {
        const result = await db.query(
            'DELETE FROM users WHERE id = $1', [id]
        )
        return result.rowCount > 0
    }
}


module.exports = UserModel;
console.log()