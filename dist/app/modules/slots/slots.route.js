"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const slots_controller_1 = require("./slots.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Creating Bulk Slots
router.post('/bulk', (0, auth_1.default)('admin'), 
// validateRequest(FacilityValidation.createFacilityValidationSchema),
slots_controller_1.SlotController.createSlots);
exports.SlotRoutes = router;
