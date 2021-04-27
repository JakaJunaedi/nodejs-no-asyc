const pool = require('../config/database');
const getUser = async () => {
    try{
        const users = await pool.query('SELECT * FROM users ORDER BY user_id ASC');
        return users.rows;
    }catch (e) {
        throw e;
    }
};

const getUsersById = async (id) => {
    try{
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])
        return {err: null, data: user.rows};
    }catch (e) {
        return {err: e.message, data: null};
    }
};

module.exports = {
    getUser,
    g1: getUsersById,
};