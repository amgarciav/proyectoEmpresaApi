const mongoose = require('mongoose');
const URI = 'mongodb+srv://sena25:fsbet4MMcpaSkLPD@pruebamodulo.mpezf67.mongodb.net/empresa?retryWrites=true&w=majority&appName=pruebamodulo';
mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;