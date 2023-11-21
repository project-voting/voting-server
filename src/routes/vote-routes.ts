import express, { Router } from 'express'
import VoteController from '@controllers/VoteController'

const voteRouter: Router = express.Router()

voteRouter.post('/voting', VoteController.voting)

export default voteRouter