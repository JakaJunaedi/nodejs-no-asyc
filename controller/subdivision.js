const pool = require('../config/database');

/** Get All Subdivision */
const getPos = (request, response) => {
    pool.query('SELECT * FROM subdivision ORDER BY subdivision_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/******* Get Position By ID */
const getSubById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM subdivision WHERE subdivision_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/** Create Position */
const createSub = (request, response) => {
    const { subdivision_code, subdivision_name, level, group_subdivision, parent } = request.body

    pool.query('INSERT INTO subdivision (subdivision_code, subdivision_name, level, group_subdivision, parent) VALUES ($1, $2, $3, $4, $5)', [subdivision_code, subdivision_name, level, group_subdivision, parent], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Berhasil Menambahkan Subdivision`)
    })
}

/** Update Position */
const updateSub = (request, response) => {
    const id = parseInt(request.params.id)
    const { subdivision_code, subdivision_name, level, group_subdivision, parent } = request.body
  
    pool.query('UPDATE subdivision SET subdivision_code = $1, subdivision_name = $2, level = $3, group_subdivision = $4, parent = $5 WHERE subdivision_id = $6',
    [subdivision_code, subdivision_name, level, group_subdivision, parent, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Berhasil merubah subdivision by ID : ${id}`)
    })
}

/** Delete Position */
const deleteSub = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM subdivision WHERE subdivision_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Berhasil hapus Subdivision by ID : ${id}`)
    })
}


module.exports = {
    getPos,
    getSubById,
    createSub,
    updateSub,
    deleteSub
}