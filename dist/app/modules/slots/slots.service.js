"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotService = void 0;
const mongoose_1 = require("mongoose");
const slots_model_1 = require("./slots.model");
const dayjs_1 = __importDefault(require("dayjs"));
const createSlotsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { dateRange, startTime, endTime, facilities, slotInterval } = payload;
    const allSlots = [];
    const startDate = (0, dayjs_1.default)(dateRange[0]);
    const endDate = (0, dayjs_1.default)(dateRange[1]);
    for (let currentDate = startDate; currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day'); currentDate = currentDate.add(1, 'day')) {
        const dateString = currentDate.format('YYYY-MM-DD');
        for (const facility of facilities) {
            let slotStart = (0, dayjs_1.default)(`${dateString}T${startTime}`);
            const slotEndLimit = (0, dayjs_1.default)(`${dateString}T${endTime}`);
            while (slotStart.isBefore(slotEndLimit)) {
                const slotEnd = slotStart.add(slotInterval, 'minute');
                allSlots.push({
                    facility: new mongoose_1.Types.ObjectId(facility),
                    date: dateString,
                    startTime: slotStart.format('HH:mm'),
                    endTime: slotEnd.format('HH:mm'),
                });
                slotStart = slotEnd;
            }
        }
    }
    const result = yield slots_model_1.Slot.insertMany(allSlots);
    return result;
});
exports.SlotService = {
    createSlotsIntoDB,
};
