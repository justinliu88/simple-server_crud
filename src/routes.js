const express = require("express");
const postRoutes = require("./routes/posts");

const router = express.Router();

router.use('/posts', postRoutes);

module.exports = router;