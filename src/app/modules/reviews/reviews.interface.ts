import { Types } from 'mongoose'

export type TReview = {
  userId: Types.ObjectId,
  facilityId: Types.ObjectId,
  rating: number,
  review: string
}
export type TReviews = {
  userId: Types.ObjectId,
  facilityId: Types.ObjectId,
  rating: number,
  review: string,
  replys?: TReview[]
}