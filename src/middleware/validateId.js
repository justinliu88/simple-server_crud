const postModel = require("../models/post");

module.exports = function(req, res, next) {
    let { id } = req.params;
    id = Number(id);

    if (!postModel.doesIdExits(id)) {
        return res.status(404).json({ error: 'post ID not found' });
    }

    req.params.id = id;
    next();
}