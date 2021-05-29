const Question = require('../models/forumQuestionSchema')

async function getQuestion(req, res, next) {
    let question
    try {
      question = await Question.findById(req.params.id)
      if (question == null) {
        return res.status(404).json({ message: 'Cannot find question' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.question = question
    next()
  }

  module.exports = getQuestion