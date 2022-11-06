const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
 
router.post('/user', userController.createUser)
router.post('/user/signup', userController.userReg)
router.post('/user/signin', userController.signIn)
router.post('/user/setteam', userController.setTeam)
router.get('/user', userController.getUsers)
router.get('/user/def', userController.defaultUser)
router.get('/usertest', userController.testUser)
router.get('/user/:id', userController.getOneUser)
router.get('/user/search/:query', userController.findUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)





module.exports = router