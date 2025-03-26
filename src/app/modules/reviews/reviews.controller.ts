import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { ReviewServices } from './reviews.service'


const createReview = catchAsync(async (req, res) => {

  const result = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Availability checked successfully',
    data: result,
  })
})



export const ReviewController = {
  createReview
}
