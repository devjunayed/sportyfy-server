import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { CategoryService } from './category.service'

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategoryIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category added successfully',
    data: result,
  })
})
const updateCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.updateCategoryFromDB(
    req.params.id,
    req.body,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category updated successfully',
    data: result,
  })
})
const deleteCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteCategoryFromDB(req.params.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: result,
  })
})
const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategoryFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories data retrieved successfully',
    data: result,
  })
})

const getSingleCategory = catchAsync(async(req, res) => {
  const result = await CategoryService.getSingleCategoryFromDB(req.params.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category data retrieved successfully',
    data: result,
  })
})

export const CategoryController = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory
}
