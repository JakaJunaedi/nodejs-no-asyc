const pool = require('../config/database');

/******* Get All Application */
const getApp = (request, response) => {
    pool.query('SELECT * FROM application ORDER BY application_id ASC', (error, results) => {
              if (error) {
                throw error
              }
              response.status(200).json(results.rows)
            })
        }

/******** Get Application By ID */
const getAppById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM application WHERE application_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

/******** Create Application */
const createApp = (request, response) => {
  const { application_code, application_name, url, spv_application } = request.body

  pool.query('INSERT INTO application (application_code, application_name, url, spv_application) VALUES ($1, $2, $3, $4)', [application_code, application_name, url, spv_application], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Berhasil menambahkan application`)
  })
}

/******** Update Application */
const updateApp = (request, response) => {
  const id = parseInt(request.params.id)
  const { application_code, application_name, url, spv_application } = request.body

  pool.query('update application set application_code = $1, application_name = $2, url = $3, spv_application = $4 WHERE application_id = $5',
  [application_code, application_name, url, spv_application, id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Berhasil merubah data application by ID : ${id}`)
  })
}


/******** Delete Application */
const deleteApp = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM application WHERE application_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Berhasil hapus application by ID: ${id}`)
  })
}



module.exports = {
    getApp,
    createApp,
    getAppById,
    updateApp,
    deleteApp
}