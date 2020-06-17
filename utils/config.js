require("dotenv").config();


const config = {
  LocalConfig: {
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT || 5000,
    SECRET: process.env.SECRET,
};

module.exports = config;
