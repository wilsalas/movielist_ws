const router = require('express').Router();
const { getDataMovies, insertDataMovies } = require('../controllers/movieController');

/* Renderer index page */
router.get('/', (req, res) => res.render('index'));
/* Endpoint to get all movies */
router.get('/api/allmovies', getDataMovies);
/* Endpoint for insert data the api in mongodb database */
router.post('/api/insertmovies', insertDataMovies);

module.exports = router;