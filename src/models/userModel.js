const db = require('../config/db');

class UserModel {
    static async getAllUsers() {
        const result = await db.query(
            'SELECT * FROM test2'
        );
        return result.rows;
    }
    static async getUserbyId(id) {
        const result = await db.query(
            'SELECT * FROM test2 WHERE id = $1', [id]
        );
        return result.rows[0];
    }
    static async createUser(info) {
        const result = await db.query(
            'INSERT INTO test2 (name, email) VALUES ($1, $2) RETURNING *',
            [info.name, info.email]
        );
        return result.rows[0];
    }
    static async updateUser(id, info) {
        const result = await db.query(
            'UPDATE test2 SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [info.name, info.email, id]
        );
        return result.rows[0];
    }
    static async deleteUser(id) {
        const result = await db.query(
            'DELETE FROM test2 WHERE id = $1', [id]
        )
        return result.rowCount > 0
    }
}


module.exports = UserModel;
