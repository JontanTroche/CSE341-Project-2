const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('project2').collection('todo').find();
    result.toArray().then((todo) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(todo);
    });
};

const getSingle = async (req, res) => {
    const todoId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('todo').find({ _id: todoId });
    result.toArray().then((todo) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(todo[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};