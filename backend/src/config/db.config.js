const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db_url ="mongodb+srv://riyazn886:2ZqXFvSBK7BUxwst@riyaz.aatdsty.mongodb.net/";

const dbConnection = async (req, res) => {
        console.log("inside DB connection");
        await mongoose.connect(db_url);
        console.log("DB connection established")
}

module.exports = dbConnection;