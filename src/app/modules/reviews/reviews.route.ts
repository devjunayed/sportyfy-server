import express from 'express'
import auth from '../../middlewares/auth'
import { ReviewController } from './reviews.controller';

const router = express.Router()


router.post('/', auth(['admin', 'user']), ReviewController.createReview);

export const ReviewsRoutes = router
