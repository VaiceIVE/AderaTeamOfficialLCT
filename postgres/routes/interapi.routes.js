const Router = require('express')
const router = new Router()
const interapiController = require('../controllers/interapi.controller')
var multer  = require('multer')();

router.post('/table', multer.single('file'),interapiController.processXlsx)
router.post('/kpgz', multer.single('file'),interapiController.addKpgz)





module.exports = router