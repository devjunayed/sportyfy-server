/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload)
  return result;
}

const updateCategoryFromDB = async (id: string, payload: TCategory) => {
  // updating data
  await Category.findByIdAndUpdate(id, payload)

  // showing updated data
  const CategoryData = await Category.findById(id)
  return CategoryData
}
const deleteCategoryFromDB = async (id: string) => {
  // soft deleting data
  await Category.findByIdAndUpdate(id, { isDeleted: true })

  // showing updated data
  const CategoryData = await Category.findById(id)
  return CategoryData
}
const getAllCategoryFromDB = async () => {
  const query: any = { isDeleted: { $ne: true } };

  const result = await Category.find(query);
  return result;
};


const getSingleCategoryFromDB = async(id: string) => {
  const result = await Category.findOne({_id: id});
  return result;
}

export const CategoryService = {
  createCategoryIntoDB,
  updateCategoryFromDB,
  deleteCategoryFromDB,
  getAllCategoryFromDB,
  getSingleCategoryFromDB
}
