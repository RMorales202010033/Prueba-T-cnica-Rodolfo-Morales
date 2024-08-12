const express = require('express');
const router = express.Router();

const { getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/consultas')

router.get('/api/tasks', getTasks)
router.post('/api/tasks', createTask)
router.get('/api/tasks/:id', getTask)
router.put('/api/tasks/:id', updateTask)
router.delete('/api/tasks/:id', deleteTask)

module.exports = router;
