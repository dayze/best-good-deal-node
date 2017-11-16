require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT
}