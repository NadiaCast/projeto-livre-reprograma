const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')

require ("dotenv") .config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const planosRoute = require("./routes/planosRoute");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect()

app.use("/planos", planosRoute);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;