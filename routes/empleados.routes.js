const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controllers');
router.get('/', empleadoCtrl.getEmpleados);
router.get('/:id', empleadoCtrl.getEmpleado);
router.post('/', empleadoCtrl.createEmpleado);
router.put('/:id', empleadoCtrl.editarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado);    
module.exports = router;