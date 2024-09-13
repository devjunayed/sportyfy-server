import express from 'express'
import { BookingController } from './booking.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

// checking availability of time
router.get('/check-availability', BookingController.checkAvailability)

// creatign booking
router.post('/bookings', auth('user'), BookingController.createBooking)

// getting all bookings
router.get('/bookings', auth('admin'), BookingController.getAllBookings)

// get user bookings
router.get('/bookings/user', auth('user'), BookingController.getUserBookings)

export const BookingRoutes = router
