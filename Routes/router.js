const express=require('express')


const userController=require('../controllers/userController')

const multerConfig=require('../middlewares/multer-middleware')

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-users',userController.getallUsers)

router.delete('/delete-user/:id',userController.deleteUser)

router.put('/edit-user/:id',multerConfig.single("profile"),userController.editUser)

module.exports=router 

