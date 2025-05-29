const Empleado = require('../models/empleado.models');
const empleadoCtrl = {};
//Definir los métodos del controlador
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};
//consulta un solo empleado
empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}

//crear un empleado
empleadoCtrl.createEmpleado = async (req, res) =>{
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado guardado'
    });
}
//actualizar un empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleado = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new: true});
    res.json({status: 'Empleado actualizado' });
}
//eliminar un empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado eliminado'});
}
module.exports = empleadoCtrl;
