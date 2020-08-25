const { Router } = require('express');
const searchRouter = require('./route');
const router = Router();


router.use('/api', searchRouter)



module.exports = router;