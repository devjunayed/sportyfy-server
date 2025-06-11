"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
const createCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.create(payload);
    return result;
});
const updateCategoryFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // updating data
    yield category_model_1.Category.findByIdAndUpdate(id, payload);
    // showing updated data
    const CategoryData = yield category_model_1.Category.findById(id);
    return CategoryData;
});
const deleteCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // soft deleting data
    yield category_model_1.Category.findByIdAndUpdate(id, { isDeleted: true });
    // showing updated data
    const CategoryData = yield category_model_1.Category.findById(id);
    return CategoryData;
});
const getAllCategoryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = { isDeleted: { $ne: true } };
    const result = yield category_model_1.Category.find(query);
    return result;
});
const getSingleCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findOne({ _id: id });
    return result;
});
exports.CategoryService = {
    createCategoryIntoDB,
    updateCategoryFromDB,
    deleteCategoryFromDB,
    getAllCategoryFromDB,
    getSingleCategoryFromDB
};
