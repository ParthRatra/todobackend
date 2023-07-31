
// hm aise instance create krte 
const express =require("express")
// hm aise instance create krte 
const router =express.Router()
 

// import controller 
const {creating}=require("../controllers/createTodo")

//  define routes 
// jo bhhi api routes hai  get,put,post,delete sab  dal skte
// /is vale path mai jao aur post request mardo
// http://localhost:3000/api/v1/createTodo->postman pr yh likhege
router.post('/createTodo',creating);



// get krna hai pura
const {getting}=require('../controllers/gettodo')
router.get("/gettodo", getting);
// http://localhost:3000/api/v1/gettodo->postman pr mai aise likhunga

module.exports =router




// get kr na hai hme ek particular id ko
const {gettodobyid}=require('../controllers/gettodo')

router.get('/gettodo/:id',gettodobyid)
// http://localhost:3000/api/v1/gettodo/64c769882fce426c77a66322





// update krna
const {updating}=require('../controllers/updatetodo')
// http://localhost:3000/api/v1/updatetodo/64c769872fce426c77a66320
router.put('/updatetodo/:id',updating) 



// deletetodo
const {deleting}=require('../controllers/deletetodo')
// http://localhost:3000/api/v1/deletetodo/64c769872fce426c77a66320
router.delete('/deletetodo/:id',deleting)