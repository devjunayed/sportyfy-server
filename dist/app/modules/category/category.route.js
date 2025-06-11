"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
// Creating category
router.post('/', (0, auth_1.default)('admin'), (0, validateRequest_1.validateRequest)(category_validation_1.CategoryValidation.createCategoryValidationSchema), category_controller_1.CategoryController.createCategory);
// updating Facility
router.put('/:id', (0, auth_1.default)('admin'), (0, validateRequest_1.validateRequest)(category_validation_1.CategoryValidation.updateCategoryValidationSchema), category_controller_1.CategoryController.updateCategory);
// soft deleting facility
router.delete('/:id', (0, auth_1.default)('admin'), category_controller_1.CategoryController.deleteCategory);
// get all facility
router.get('/', category_controller_1.CategoryController.getAllCategory);
// get single facility
router.get('/:id', category_controller_1.CategoryController.getSingleCategory);
exports.CategoryRoutes = router;
