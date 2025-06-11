"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createCategoryValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: 'Category title is required',
            invalid_type_error: 'Category title must be string',
        }),
        subtitle: zod_1.default.string({
            required_error: 'Category subtitle is required',
            invalid_type_error: 'Category subtitle must be string',
        }),
        image: zod_1.default.string({
            required_error: 'Category image is required',
            invalid_type_error: 'Category image must be string',
        }),
    }),
});
const updateCategoryValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            invalid_type_error: 'Category title must be string',
        }).optional(),
        subtitle: zod_1.default.string({
            invalid_type_error: 'Category subtitle must be string',
        }).optional(),
        image: zod_1.default.string({
            invalid_type_error: 'Category image must be string',
        }).optional(),
    }),
});
exports.CategoryValidation = {
    createCategoryValidationSchema,
    updateCategoryValidationSchema,
};
