const express=require('express')
const {home, createUser, getUser, getUsers, deleteUser, editUser} =require('../controlers/usercontroler')
const router=express.Router()

router.get('/' , home)
router.post('/createuser',createUser)
router.get('/getrequest', getUsers)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateuser/:id', editUser)

module.exports = router