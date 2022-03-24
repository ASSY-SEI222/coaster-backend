const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/allCoasters', controllers.getAllCoasters)
router.get('/allParks', controllers.getAllParks)

router.post('/parks/create', controllers.createPark)
router.post('/coasters/create',controllers.createCoaster)

router.post('parks/:id/addComment',controllers.addReview)

module.exports = router;