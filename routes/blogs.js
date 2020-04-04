var express = require('express');
var router = express.Router();
const blogModel = require('../models/blogModel');

router.get('/', async (req, res) => {
    const response = await blogModel.getAllBlogData();
    res.json(response).status(200);
});

router.get('/:id?', async (req, res) => {
    const {
        id
    } = req.params;
    const response = await blogModel.getSingleBlog(id);
    res.json(response).status(200);
})

router.get('/:id?/comments', async (req, res) => {
    const {
        id
    } = req.params;
    const response = await blogModel.getBlogComments(id);
    res.json(response).status(200);
})

module.exports = router;