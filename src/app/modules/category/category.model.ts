import { model, Schema } from 'mongoose'
import { TCategory } from './category.interface'

const categorySchema = new Schema<TCategory>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
})

export const Category = model<TCategory>('Category', categorySchema)
