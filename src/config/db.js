const mongoose = require("mongoose");
const { DB_HOST, DB_USER, DB_PASS } = process.env;
//configuration for accessing to the mongodb database
(async () => {
    try {
        await mongoose.connect(DB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auth: {
                user: DB_USER,
                password: DB_PASS,
            }
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(`An error occurred connecting to MongoDB ${err}`);
    }
})();