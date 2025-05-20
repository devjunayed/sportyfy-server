import express from 'express'
import auth from '../../middlewares/auth'
import { validateRequest } from '../../middlewares/validateRequest'
import { CategoryValidation } from './category.validation'
import { CategoryController } from './category.controller'

const router = express.Router()

// Creating category
router.post(
  '/',
  auth('admin'),
  validateRequest(CategoryValidation.createCategoryValidationSchema),
  CategoryController.createCategory,
)
// updating Facility
router.put(
  '/:id',
  auth('admin'),
  validateRequest(CategoryValidation.updateCategoryValidationSchema),
  CategoryController.updateCategory,
)

// soft deleting facility
router.delete('/:id', auth('admin'), CategoryController.deleteCategory)

// get all facility
router.get('/', CategoryController.getAllCategory)


// get single facility
router.get('/:id', CategoryController.getSingleCategory)

export const CategoryRoutes = router
