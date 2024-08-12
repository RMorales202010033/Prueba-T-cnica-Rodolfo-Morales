const pool = require('../config/db');

async function getTasks(req, res) {
    const tareasQuery = 'SELECT * FROM TAREAS';
    try {
        const [tareas] = await pool.execute(tareasQuery);
        return res.status(200).json({ tasks: tareas });
    } catch (err) {
        console.error('Error al obtener las tareas:', err);
        return res.status(500).json({ response: 'Error interno del servidor' });
    }
}

async function createTask(req, res) {
    const { titulo, descripcion } = req.body;
    const query = 'INSERT INTO TAREAS (titulo, descripcion) VALUES (?, ?)';
    try {
        const [result] = await pool.execute(query, [titulo, descripcion]);
        return res.status(201).json({ response: 'Tarea añadida exitosamente' });
    } catch (err) {
        console.error('Error al insertar la tarea:', err);
        return res.status(500).json({ response: 'Error al insertar la tarea' });
    }
}

async function getTask(req, res) {
    const { id } = req.params;
    console.log(id);
    const query = 'SELECT * FROM TAREAS WHERE id = ?';
    try {
        const [tarea] = await pool.execute(query, [id]);

        if (tarea.length > 0) {
            return res.status(200).json({ task: tarea[0] });
        } else {
            return res.status(404).json({ response: `No se encontró la tarea con el id: ${id}` });
        }
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ response: 'Error interno del servidor' });
    }
}

async function updateTask(req, res) {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    // console.log(id);
    const query = 'UPDATE TAREAS SET titulo = ?, descripcion = ? WHERE id = ?';
    try {
        const [tarea] = await pool.execute(query, [titulo, descripcion, id]);
        return res.status(200).json({ response: 'Tarea actualizada exitosamente' });
    } catch (err) {
        console.error('Error:', err);
        return res.status(400).json({ response: 'Error al actualizar la tarea.' });
    }
}

async function deleteTask(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM TAREAS WHERE id = ?';
    try {
        const [tarea] = await pool.execute(query, [id]);
        return res.status(200).json({ response: 'Tarea eliminada exitosamente' });
    } catch (err) {
        console.error('Error:', err);
        return res.status(400).json({ response: 'Error al eliminar la tarea.' });
    }
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
