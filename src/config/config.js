require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 3000,
    api_key: process.env.API_KEY,
  }
}

module.exports = config;