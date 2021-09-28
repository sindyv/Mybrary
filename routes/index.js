const express = require('express')
const Book = require('../models/book')
const router = express.Router()

router.get('/', async (req, res) => {
    books = await Book.find().sort({ createdAt: 'desc'}).limit(10).exec()
    try {
        
        res.render('index', {books: books})
    } catch {
        books = []
    }
}) 


module.exports = router