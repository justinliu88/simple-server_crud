const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('common'));
app.use(cors());

app.use(express.json());

app.use('/v1', routes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})