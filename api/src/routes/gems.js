const server = require('express').Router();
const { Gem, Genre, User } = require('../db.js');

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


  server.post('/', async (req, res) => {  //AGREGA GEM
      console.log(req.body)
      const { name, link, genre, description, time, userId } = req.body;
      if(!genre) {
        return res.status(400).send('Debes ingresar un genre')
      }
      var gem = await Genre.findAll({
          where: {
              name: genre
          }
      })
        genreId = gem[0].id;
        Gem.create({
            name,
            link,
            genre,
            description,
            time
        }).then(gem => {
            gem.addUsers(userId);
            gem.addGenres(genreId);
            res.status(200).json(gem);
        }).catch(err => {
            res.status(400).send('errrrrrorrorr')
        })
  })



  server.get('/', (req, res) => { //TRAE TODAS LAS GEMS
    console.log(req.body, 'jeje')
      Gem.findAll({
          include: {
              model: Genre
          }
      })
        .then(gems => {
            res.json(gems);
        })
        .catch(err => {
            res.status(400).send('no hay gems de este genre :(')
        })
  })




  module.exports = server;

  