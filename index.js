const express = require('express');
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');

/** Import Controller REST API */
const apps = require('./controller/application');
const priv = require('./controller/privilege');
const pos = require('./controller/position');
const sub = require('./controller/subdivision')
const usr = require('./controller/users');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

/** Request Mapping API HOME */
app.get('/', (request, response) => {
    response.json({ info: 'Berhasil Rest API JSON' })
  })

/** Request Mapping API Table Application */
app.get('/application',apps.getApp)
app.get('/application/:id',apps.getAppById)
app.post('/application',apps.createApp)
app.put('/application/:id',apps.updateApp)
app.delete('/application/:id',apps.deleteApp)

/** Resquest Mapping API Table Privilege */
app.get('/privilege',priv.getPriv)
app.get('/privilege/:id',priv.getPrivById)
app.post('/privilege',priv.createPriv)
app.put('/privilege/:id',priv.updatePriv)
app.delete('/privilege/:id',priv.deletePriv)

/** Request Mapping API Table Position */
app.get('/position',pos.getPos)
app.get('/position/:id',pos.getPosById)
app.post('/position',pos.createPos)
app.put('/position/:id',pos.updatePos)
app.delete('/position/:id',pos.deletePos)

/** Request Mapping API Table Subdivision */
app.get('/subdivision',sub.getPos)
app.get('/subdivision/:id',sub.getSubById)
app.post('/subdivision',sub.createSub)
app.put('/subdivision/:id',sub.updateSub)
app.delete('/subdivision/:id',sub.deleteSub)

/** Request Mapping API Table Users */
app.get('/users',usr.getUsers)
app.get('/users/:id',usr.getUsersById)
//app.post('/subdivision',sub.createSub)
//app.put('/subdivision/:id',sub.updateSub)
//app.delete('/subdivision/:id',sub.deleteSub)


/** Example Type Data pada JAVA SCRIPT ***
var foo ='hello'
var bar = 123
var obj ={}
var arr=[]
console.log(typeof foo) //=> string
console.log(typeof bar) //=> number
console.log(typeof obj) //=> object
console.log(typeof arr) //=> object
*/

app.listen(process.env.PORT, () => {
    console.log(`Server Sedang Running on PORT ${process.env.PORT}`)
})