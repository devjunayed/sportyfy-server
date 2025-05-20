"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidationSchema = void 0;
const zod_1 = require("zod");
exports.ReviewValidationSchema = zod_1.z.object({
    facilityId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), // Ensures valid MongoDB ID
    userId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    rating: zod_1.z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    review: zod_1.z.string().min(1, "Review cannot be empty"),
    replies: zod_1.z.array(zod_1.z.object({
        facilityId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
        userId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
        rating: zod_1.z.number().min(1).max(5),
        review: zod_1.z.string().min(1, "Review cannot be empty"),
    })).optional(),
});
