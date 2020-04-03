var express = require('express');
var router = express.Router();
const blogModel = require('../models/blogModel');

router.get('/', async function(req, res, next) {
    const response = await blogModel.getAllBlogData();
    res.json(response);
});

module.exports = router;