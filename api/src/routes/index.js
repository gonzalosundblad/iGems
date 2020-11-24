
const { Router } = require('express');
// import all routers;
// const { Gem } = require('../db.js');
const GemRouter = require('./gems.js');
const UserRouter = require('./users.js');



var router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/gems', GemRouter);
router.use('/users', UserRouter);


module.exports = router;