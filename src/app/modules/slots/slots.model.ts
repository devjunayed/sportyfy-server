import { model, Schema } from 'mongoose'
import { TSlot } from './slots.interface'

const slotSchema = new Schema<TSlot>({
  facility: {
    type: Schema.Types.ObjectId,
    ref: 'Facility',
    required: true,
  },
  bookedBy: {
    type: Schema.Types.ObjectId || null,
    ref: 'User',
    default: null
  },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isBooked: {
    type: Boolean,
    default: false
  }
})

export const Slot = model<TSlot>('Slot', slotSchema)
