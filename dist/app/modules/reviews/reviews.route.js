"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const reviews_controller_1 = require("./reviews.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(['admin', 'user']), reviews_controller_1.ReviewController.createReview);
exports.ReviewsRoutes = router;
