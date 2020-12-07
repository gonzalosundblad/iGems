const server = require('./src/app.js');
const port = 8000
const { conn } = require('./src/db.js');
const { Gem, Genre, User } = require('./src/db.js');
const e = require('express');



const force = true;
conn.sync({ force }).then(() => {
  server.listen(port, () => {            //MODIFIQUE EL PUERTO EN EL QUE SE ESCUCHA EL SERVIDOR PARA PODER TENER FRONT Y BACK ABIERTOS

    console.log(`listening on port ${port}`);
    
    var gems = arrayGems.map(gem => {
      Gem.create(gem)
        .then(g => {
          g.addGenres(gem.genre)
        })
    })
    var genres = arrayGenres.map(genre => {
      Genre.create({name: genre})
    })
    var users = arrayUsers.map(user => {
      User.create(user)
    })
  })
})

var arrayGems = [
  {
  name: 'HOY SÍ que vas a entender la Relatividad General',
  link: 'https://www.youtube.com/watch?v=RTlixJv7gWo&list=LL&index=576&t=886s',
  genre: 2,
  descritpion: 'relatividad general de einstein',
  time: 30
}, {
  name: 'HOY SÍ que vas a entender la relatividad especial',
  link: 'https://www.youtube.com/watch?v=lT4OLf4yyuU&list=LL&index=590&t=4s',
  genre: 2,
  descritpion: 'principios de la relatividad especial de einstein. acercamientos a su teoria general',
  time: 10
}, {
  name: 'Brian Greene: The Cosmos in Twenty Minutes',
  link: 'https://www.youtube.com/watch?v=vmP4hV8o8UU&list=LL&index=490&t=156s',
  genre: 2,
  time: 20
}, {
  name: 'Brian Greene Explains That Whole General Relativity Thing',
  link: 'https://www.youtube.com/watch?v=0jjFjC30-4A&list=LL&index=496&t=5s',
  genre: 2,
  time: 5
}
, {
  name: 'A mind-expanding tour of the cosmos with Neil deGrasse Tyson and Robert Krulwich',
  link: 'https://www.youtube.com/watch?v=AyAK3QBnMGQ&list=LL&index=488&t=80s',
  genre: 2,
  time: 0
}, {
  name: 'La Gravedad NO ES UNA FUERZA | El Principio de Equivalencia',
  link: 'https://www.youtube.com/watch?v=7vhc-hMWclY&list=LL&index=658',
  genre: 2,
  time: 10
}, {
  name: 'The Cold Spot - Signs of Another Universe in the CMB? [OOTW]',
  link: 'https://www.youtube.com/watch?v=PQHhLHh_8go&list=LL&index=586&t=13s',
  genre: 2,
  time: 10
}, {
  name: 'La Teoría de Cuerdas explicada - ¿Cuál es la verdadera naturaleza de la realidad?',
  link: 'https://www.youtube.com/watch?v=Da-2h2B4faU&list=LL&index=579&t=16s',
  genre: 2,
  time: 10
}, {
  name: 'Why Elon Musk says we are living in a simulation',
  link: 'https://www.youtube.com/watch?v=J0KHiiTtt4w&list=LL&index=410',
  genre: 13,
  time: 5
}, {
  name: 'Agujeros negros explicados - Desde su nacimiento hasta su muerte',
  link: 'https://www.youtube.com/watch?v=e-P5IFTqB98&list=PLFs4vir_WsTwEd-nJgVJCZPNL3HALHHpF&index=25',
  genre: 2,
  time: 5
}, {
  name: 'Why Alien Life Would be our Doom - The Great Filter',
  link: 'https://www.youtube.com/watch?v=UjtOGPJ0URM&list=LL&index=350&t=1s',
  genre: 2,
  time: 10
}, {
  name: 'El fin del espacio - Creando una prisión para la humanidad',
  link: 'https://www.youtube.com/watch?v=yS1ibDImAYU&list=LL&index=335&t=400s',
  genre: 2,
  time: 10
}, {
  name: 'Está usted en una simulación?',
  link: 'https://www.youtube.com/watch?v=3d9i_0Ty7Cg&list=LL&index=377&t=208s',
  genre: 13,
  time: 5
}, {
  name: '¿El color rojo que tú ves es el mismo que yo veo?',
  link: 'https://www.youtube.com/watch?v=evQsOFQju08',
  genre: 13,
  time: 10
}, {
  name: 'Un antídoto contra la Insatisfacción',
  link: 'https://www.youtube.com/watch?v=WPPPFqsECz0',
  genre: 5,
  time: 10
},{
  link: 'https://www.youtube.com/watch?v=3d9i_0Ty7Cg&list=LL&index=377&t=208s',
  genre: 2,
  name: 'Está usted en una simulación?',
  time: 10
}, {
  link: 'https://www.youtube.com/watch?v=4Ou7VwS3pSw',
  name: 'Ashes to Ashes (cover) - Warpaint. Live on BBC',
  genre: 1,
  time: 5
}, {
  link: 'https://www.youtube.com/watch?v=evQsOFQju08',
  name: '¿El color rojo que tú ves es el mismo que yo veo?',
  genre: 13,
  time: 10
}, {
  link: 'https://www.youtube.com/watch?v=m1H-kuJbT8E',
  name: 'MARTEEEEENNN',
  genre: 11,
  time: 5
}, {
  link: 'https://www.youtube.com/watch?v=2rBJpZwO1i8&feature=youtu.be',
  name: 'Rythm of The Rainbow (ft. Corona) - PoxyClub',
  genre: 1,
  time: 5
}, {
  link: 'https://www.youtube.com/watch?v=IJhgZBn-LHg',
  name: 'How Earth Moves',
  genre: 2,
  time: 20
}, {
  name: 'Go for a run!',
  genre: 18,
  time: 30
}, {
  name: 'Five minutes to the sea',
  link: 'https://vimeo.com/468976307',
  genre: 6,
  description: 'touching emotional refreshing animation',
  time: 5
}
]

var arrayGenres = ['Music', 'Science', 'Photography', 'Literature', 'Psychology', 'Shortfilm', 'Architecture', 
'Visual Art', 'Dance', 'History', 'Sports', 'Interesting facts', 'Mindblowing ideas', 'Biographies',
 'Mustsee videoclips', 'Mustsee live shows', 'Cool websites', 'Off computer ideas']

 var arrayUsers = [
   {
     name: 'gon',
     email: 'gon@gmail.com',
     password: '1234',
     username: 'gonete'
   },
   {
    name: 'eric',
    email: 'eric@gmail.com',
    password: '1234',
    username: 'ericbro'
  }
 ]


server.get('/', (req, res) => {
  res.send('Hello World!')
})
server.get('/', (req, res) => {
    res.send('holi')
})



 







