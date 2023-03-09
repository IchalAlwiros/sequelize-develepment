const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// import sequelize model
const { sequelize } = require("./sequelize/models");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route

//connection DB
const connectDb = async () => {
  console.log("checking database connection");

  try {
    await sequelize.authenticate();
    console.log("database connection established");
  } catch (err) {
    console.log("database connection failed", err);
    process.exit(1);
  }
};

// port
const PORT = process.env.PORT || 3000;
connectDb();
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});
