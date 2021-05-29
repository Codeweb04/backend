const express = require('express')
const Question = require('../models/forumQuestionSchema')
const router = express.Router()
const getUser = require('../middleware/getUser')
const getQuestion = require('../middleware/getQuestion')



router.get('/', async (req, res) => {
    try {
        await Question.find({}).then(function (question) {
            res.send(question);
            })
    } catch (error) {
        console.log(error)
    }
})

router.post('/ask', getUser, async (req, res) => {
    const question = new Question({
        uname: res.user.uname,
        question: req.body.question,
        description: req.body.description,
        tags: req.body.tags    
    })

    try {
        const newQuestion = await question.save()
        res.status(201).json(newQuestion)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/answer/:id', getUser, getQuestion, async (req, res) => {

    var answerObj = {}
    answerObj.answer = req.body.answer;
    answerObj.uname = res.user.uname;
    answerObj.upvotes = 0
    res.question.answers.push(answerObj);

    try {
        const updatedAnswer = await res.question.save()
        res.json(updatedAnswer)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



module.exports = router