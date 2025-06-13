import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import {  SlotService } from './slots.service'

const createSlots = catchAsync(async (req, res) => {
  const result = await SlotService.createSlotsIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  })
})


export const SlotController = {
  createSlots
}
