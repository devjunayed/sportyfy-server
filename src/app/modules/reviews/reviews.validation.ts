import { z } from 'zod';

export const ReviewSchema = z.object({
  facilityId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), // Ensures valid MongoDB ID
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  review: z.string().min(1, "Review cannot be empty"),
  replies: z.array(
    z.object({
      facilityId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
      userId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
      rating: z.number().min(1).max(5),
      review: z.string().min(1, "Review cannot be empty"),
    })
  ).optional(),
});

// TypeScript inferred type
export type TReviews = z.infer<typeof ReviewSchema>;
