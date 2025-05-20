"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    facilityId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Facility'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const reviewsSchema = new mongoose_1.Schema({
    facilityId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Facility'
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
exports.Review = (0, mongoose_1.model)('Reviews', reviewsSchema);
