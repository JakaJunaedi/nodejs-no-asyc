const pool = require('../config/database');
const {
    getUser,
    g1
} = require('../services/users');
/******** Get Users By ID */
const getUsers = async (request, response) => {
    try{
        const user = await getUser();
        return response.status(200).json(user);
    }catch (e) {
        return response.status(500).json({
            message: e.message
        });
    }
};

/******** Get Application By ID */
const getUsersById = async (request, response) => {
    const id = parseInt(request.params.id)
    const res = await g1(id)
    if(res.err){
        return response.status(500).json({
            message: res.err
        });
    }
    return response.status(200).json(res.data);
};

module.exports = {
    getUsers,
    getUsersById
}