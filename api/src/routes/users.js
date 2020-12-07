const server = require('express').Router();
const { User } = require('../db.js');
const Sequelize = require('sequelize');

// server.post('/', (req, res) => {                                        //S34 : Crear Ruta para creación de Usuario (CON HASHEO ASYNC)

//     const { name, email, password, last_name } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).send("Campos requeridos")
//     }
//     bcrypt.hash(req.body.password, 10).then(hashedPassword => {
//       User.create({
//         name,
//         last_name,
//         email,
//         role: 'user',
//         password: hashedPassword
//       }).then(user => {
//         res.status(200).json(user)
//       })
//     }).catch(err => {
//       console.log('Error: ', err)
//     })
  
//   });


server.post('/', (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log('no wachi')
            res.status(400).send(err)
        })
})


server.get('/', (req, res) => {
    User.findOne({
        where: {
            [Sequelize.Op.or]: [
                {username: req.body.username},
                {email: req.body.username}
            ]
        }
    }).then(res => {
        // if(!res) {
        //     res.status(400).send('email not in db')
        // }
        console.log(res.body, 'ji')
        if(res) {
            res.status(200).send('email ok')
        }
    }).catch(err => {
        res.status(400).send('no jodas')
    })
})

//   server.post('/', (req, res) => {  //AGREGA GEM
//       console.log(req.body)
//       const {name, link, genre, description, time } = req.body;
//       Gem.create({
//           name,
//           link,
//           genre,
//           description,
//           time
//       }).then(gem => {
//           res.status(200).json(gem)
//       }).catch(err => {
//           res.status(400).send('errrrrrorrorr')
//       })
//   })

//   server.get('/', (req, res) => { //TRAE TODAS LAS GEMS
//       Gem.findAll()
//         .then(gems => {
//             res.json(gems);
//         })
//         .catch(err => {
//             res.status(400).send('no ay gems :(')
//         })
//   })




  module.exports = server;

  