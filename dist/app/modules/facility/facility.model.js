"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facility = void 0;
const mongoose_1 = require("mongoose");
const facilitySchema = new mongoose_1.Schema({
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
});
exports.Facility = (0, mongoose_1.model)('Facility', facilitySchema);
