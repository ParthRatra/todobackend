
// hm aise instance create krte 
const express =require("express")
// hm aise instance create krte 
const router =express.Router()
 

// import controller 
const {creating}=require('../controllers/createTodo')

//  define routes 
// jo bhhi api routes hai  get,put,post,delete sab  dal skte
// /is vale path mai jao aur post request mardo
router.post('/createTodo',creating) 

module.exports =router