import { model, Schema } from 'mongoose'
import { TFacility } from './facility.interface'

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
