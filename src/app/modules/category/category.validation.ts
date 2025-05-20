import z from 'zod'

const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Category title is required',
      invalid_type_error: 'Category title must be string',
    }),
    subtitle: z.string({
      required_error: 'Category subtitle is required',
      invalid_type_error: 'Category subtitle must be string',
    }),
    image: z.string({
      required_error: 'Category image is required',
      invalid_type_error: 'Category image must be string',
    }),
  }),
})
const updateCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Category title must be string',
    }).optional(),
    subtitle: z.string({
      invalid_type_error: 'Category subtitle must be string',
    }).optional(),
    image: z.string({
      invalid_type_error: 'Category image must be string',
    }).optional(),
  }),
})

export const CategoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
}
