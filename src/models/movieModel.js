const { Schema, model } = require("mongoose");

/* The movie model is defined */
const movieModel = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true },
    type: { type: String, required: true },
    poster: { type: String, required: true }
});

module.exports = model("movielist_20210208ws", movieModel);