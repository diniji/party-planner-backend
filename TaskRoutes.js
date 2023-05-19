const {Router} = require('express');
const { getTask, saveTask, deleteTask, editTask } = require('./TaskController');

const router = Router();


router.get('/', getTask);
router.post('/saveMyTask', saveTask);
router.post('/deleteMyTask', deleteTask);
router.put('/editMyTask', editTask);

module.exports = router;