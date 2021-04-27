const pool = require('../config/database');

const log = async () => {

};

/******* Get All Position */
const getPos = async (request, response) => {
    /*pool.query('SELECT * FROM position ORDER BY position_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })*/

    const results = await pool.query('SELECT * FROM position ORDER BY position_id ASC');
    log().then();
    response.status(200).json(results.rows)
};

/******* Get Position By ID */
const getPosById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM position WHERE position_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/** Create Position */
const createPos = (request, response) => {
    const { position_name, level, group_position, position_code } = request.body

    pool.query('INSERT INTO position (position_name, level, group_position, position_code) VALUES ($1, $2, $3, $4)', [position_name, level, group_position, position_code], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Berhasil Menambahkan Position`)
    })
}

/** Update Position */
const updatePos = (request, response) => {
    const id = parseInt(request.params.id)
    const { position_name, level, group_position, position_code } = request.body
  
    pool.query('UPDATE position set position_name = $1, level = $2, group_position = $3, position_code = $4 WHERE position_id = $5',
    [position_name, level, group_position, position_code, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Berhasil merubah position by ID : ${id}`)
    })
  }

/** Delete Position */
const deletePos = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM position WHERE position_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Berhasil hapus position by ID : ${id}`)
    })
}

module.exports = {
    getPos,
    getPosById,
    createPos,
    updatePos,
    deletePos
}