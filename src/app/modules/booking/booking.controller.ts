import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { BookingService } from './booking.service'

const checkAvailability = catchAsync(async (req, res) => {
  const result = await BookingService.checkAvailabilityFromDb(
    req?.query?.date as string,
  )


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Availability checked successfully',
    data: result,
  })
})

export const BookingController = {
  checkAvailability,
}
