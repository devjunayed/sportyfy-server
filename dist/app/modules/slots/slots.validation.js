"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createFacilityValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string({
            required_error: 'Facility name is required',
            invalid_type_error: 'Facility name is invalid',
        }),
        images: zod_1.default.array(zod_1.default.string({
            required_error: 'Facility image is required',
            invalid_type_error: 'Facility image is invalid',
        })),
        description: zod_1.default.string({
            required_error: 'Facility description is required',
            invalid_type_error: 'Facility description is invalid',
        }),
        shortDescription: zod_1.default.string({
            required_error: 'Facility short description is required',
            invalid_type_error: 'Facility short description is invalid',
        }),
        category: zod_1.default.string({
            required_error: 'Facility category is required',
            invalid_type_error: 'Facility category is invalid',
        }),
        rating: zod_1.default.number({
            invalid_type_error: 'Facility rating is invalid',
        }).optional(),
        capacity: zod_1.default.number({
            required_error: 'Facility capacity is required',
            invalid_type_error: 'Facility capacity is invalid',
        }),
        openHours: zod_1.default.string({
            required_error: 'Facility open hours are required',
            invalid_type_error: 'Facility open hours are invalid',
        }),
        highlight: zod_1.default.string({
            required_error: 'Facility highlight is required',
            invalid_type_error: 'Facility highlight is invalid',
        }),
        pricePerHour: zod_1.default.number({
            required_error: 'Facility price per hour is required',
            invalid_type_error: 'Facility price per hour is invalid',
        }),
        location: zod_1.default.string({
            required_error: 'Facility location is required',
            invalid_type_error: 'Facility location is invalid',
        }),
        isDeleted: zod_1.default.boolean().optional(),
    }),
});
const updateFacilityValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().optional(),
        images: zod_1.default.array(zod_1.default.string()).optional(),
        description: zod_1.default.string().optional(),
        shortDescription: zod_1.default.string().optional(),
        category: zod_1.default.string().optional(),
        rating: zod_1.default.number().optional(),
        capacity: zod_1.default.number().optional(),
        openHours: zod_1.default.string().optional(),
        highlight: zod_1.default.string().optional(),
        pricePerHour: zod_1.default.number().optional(),
        location: zod_1.default.string().optional(),
        isDeleted: zod_1.default.boolean().optional(),
    }),
});
exports.FacilityValidation = {
    createFacilityValidationSchema,
    updateFacilityValidationSchema,
};
