const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const Articles = require('../models/articles');

const articleRouter = express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Articles.find({})
    .then((articles) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(articles);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /articles');
})
.put(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /articles');
})
.delete(cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /articles');   
});


articleRouter.route('/:articleId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Articles.findById(req.params.articleId)
    .then((article) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(article);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /articles/:articleId');
})
.put(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /articles/:articleId');
})
.delete(cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /articles/:articleId');   
});


module.exports = articleRouter;