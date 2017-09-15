// DATABASE
const db = require('../../config/sequelize');
const Sequelize = require('sequelize');
const bCrypt = require('bcrypt-nodejs');

var generateHash = (contrasenia) => {
    return bCrypt.hashSync(contrasenia, bCrypt.genSaltSync(8), null);
}

const Usuario = db.define('usuario', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    contrasenia: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    isAdmin: {
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: false
    }
});
Usuario.beforeCreate((usuario, options) => {
    usuario.contrasenia = generateHash(usuario.contrasenia);
});
module.exports = Usuario;

//Usuario.findOne({where: {correo: '00fblanco@gmail.com'}}).then(usuarios => console.log(usuarios));

// Usuario.sync({force: true})
//     .then(() => {
//         return Usuario.create({
//             correo: '00fblanco@gmail.com',
//             isAdmin: true,
//             contrasenia: '123456'
//         })
//     })
