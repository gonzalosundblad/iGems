const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const User = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "No es un email valido"
        },
        notNull: {
          msg: 'Email obligatorio'
        }
      },
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
      validate: {
        len: {
          args: [4, 5],
          msg: "No es un role valido"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // set(value) {
      //   const hash = bcrypt.hashSync(value, 10); // NO ES RECOMENDADO USAR HASHSYNC PORQUE FRENA EL EVENT LOOP. HAY Q USAR HASH SOLO Q ES ASYNC
      //   this.setDataValue('password', hash);
      // }
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    }
  });
};

// User.checkPassword = function (password) {
//   //Retorna una promesa
//   return bcrypt.compare(password, this.password);
// };

module.exports = User;
