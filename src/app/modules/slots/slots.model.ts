import { model, Schema } from 'mongoose'
import { TFacility } from './slots.interface'

const facilitySchema = new Schema<TFacility>({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
  openHours: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  location: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

export const Facility = model<TFacility>('Facility', facilitySchema)
