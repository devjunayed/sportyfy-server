import {  TReviews } from "./reviews.interface";
import { Review } from "./reviews.model"

const createReviewIntoDB = async(data: TReviews)=> {
  const result = await Review.create(data)
  return result;
}

export const ReviewServices = {
  createReviewIntoDB
}