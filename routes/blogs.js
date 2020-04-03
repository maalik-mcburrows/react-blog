var express = require('express');
var router = express.Router();
const blogModel = require('../models/blogModel');

router.get('/blogs', async (res) => {
    const response = await blogModel.getAllBlogData();
    res.json(response);
});

router.get('/blogs/:id?', async (req, res) => {
    const {
        id
    } = req.params;
    const response = await blogModel.getSingleBlog(id);
    res.json(response);
})

router.get('/blogs/:id?/comments', async (req, res) => {
    const {
        id
    } = req.params;
    const response = await blogModel.getSingleComment(id);
    res.json(response);
})

module.exports = router;