"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    facility: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Facility',
        required: true,
    },
    bookedBy: {
        type: mongoose_1.Schema.Types.ObjectId || null,
        ref: 'User',
        default: null
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isBooked: {
        type: Boolean,
        default: false
    }
});
exports.Slot = (0, mongoose_1.model)('Slot', slotSchema);
