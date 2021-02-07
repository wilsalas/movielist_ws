const fetch = require('node-fetch');
const movieModel = require('../models/movieModel');

/* Get the list of records from the database */
const getDataMovies = async (req, res) => {
    try {
        const data = await movieModel.find()
            .select('name year type poster')
            .where({ type: 'movie' });
        res.json(data);
    } catch (error) {
        console.log(`An error has occurred try again please. ${error}`);
        res.json([]);
    }
}

/* Get the data from the api and store it in the database */
const insertDataMovies = async (req, res) => {
    try {
        const data = await fetch(process.env.API);
        const jsonMovies = await data.json();
        for (const item of jsonMovies.Search) {
            let newMovie = new movieModel();
            newMovie.name = item.Title;
            newMovie.year = item.Year;
            newMovie.type = item.Type;
            newMovie.poster = item.Poster;
            await newMovie.save();
        }
        res.json({ message: 'Registered movies successfully', error: false });
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error has occurred try again please.', error: true });
    }
}

module.exports = {
    getDataMovies,
    insertDataMovies
}

