var express = require('express');
var router = express.Router();
const blogModel = require('../models/blogModel');

router.get('/', async function(req, res, next) {
    const data = await blogModel.getAllBlogPosts();
    res.send(data);
});

module.exports = router;