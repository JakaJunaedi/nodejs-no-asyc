const pool = require('../config/database');

/** GET All Table Privilege */
const getPriv = (request, response) => {
    pool.query('SELECT * FROM privilege ORDER BY privilege_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/** GET Table Privilege By ID */
const getPrivById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM privilege WHERE privilege_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

/** CREATE Table Privilege */
const createPriv = (request, response) => {
    const { privilege_name, privilege_code } = request.body
  
    pool.query('INSERT INTO privilege (privilege_name, privilege_code) VALUES ($1, $2)', [privilege_name, privilege_code], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Berhasil menambahkan privilege`)
    })
}

/******** Update Application */
const updatePriv = (request, response) => {
    const id = parseInt(request.params.id)
    const { privilege_name, privilege_code } = request.body
  
    pool.query('UPDATE privilege SET privilege_name = $1, privilege_code = $2 WHERE privilege_id = $3',
    [privilege_name, privilege_code, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Berhasil merubah privilege by ID : ${id}`)
    })
  }

/** Delete Table Privilege */
const deletePriv = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM privilege WHERE privilege_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(`Berhasil hapus privilege by ID : ${id}`)
    })
}

module.exports = {
    getPriv,
    getPrivById,
    createPriv,
    updatePriv,
    deletePriv
}