import { model, Schema } from 'mongoose'
import { TReviews } from './reviews.interface'


const reviewSchema = new Schema<TReviews>({
  facilityId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Facility'
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  } 
});


const reviewsSchema = new Schema<TReviews>({
  facilityId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Facility'
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  replys: {
    type: [reviewSchema],
    required: false
  }
 
})

export const Review = model<TReviews>('Reviews', reviewsSchema)
