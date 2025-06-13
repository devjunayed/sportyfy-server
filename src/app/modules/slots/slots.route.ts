import express from 'express'
import {  SlotController } from './slots.controller'
import auth from '../../middlewares/auth'


const router = express.Router()

// Creating Bulk Slots
router.post(
  '/bulk',
  auth('admin'),
  // validateRequest(FacilityValidation.createFacilityValidationSchema),
  SlotController.createSlots,
)


export const SlotRoutes = router
