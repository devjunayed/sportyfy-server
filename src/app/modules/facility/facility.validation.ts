import z from 'zod'

const createFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Facility name is required',
      invalid_type_error: 'Facility name is invalid',
    }),
    images: z.array(
      z.string({
        required_error: 'Facility image is required',
        invalid_type_error: 'Facility image is invalid',
      }),
    ),
    description: z.string({
      required_error: 'Facility description is required',
      invalid_type_error: 'Facility description is invalid',
    }),
    shortDescription: z.string({
      required_error: 'Facility short description is required',
      invalid_type_error: 'Facility short description is invalid',
    }),
    category: z.string({
      required_error: 'Facility category is required',
      invalid_type_error: 'Facility category is invalid',
    }),
    rating: z.number({
      invalid_type_error: 'Facility rating is invalid',
    }).optional(),
    capacity: z.number({
      required_error: 'Facility capacity is required',
      invalid_type_error: 'Facility capacity is invalid',
    }),
    openHours: z.string({
      required_error: 'Facility open hours are required',
      invalid_type_error: 'Facility open hours are invalid',
    }),
    highlight: z.string({
      required_error: 'Facility highlight is required',
      invalid_type_error: 'Facility highlight is invalid',
    }),
    pricePerHour: z.number({
      required_error: 'Facility price per hour is required',
      invalid_type_error: 'Facility price per hour is invalid',
    }),
    location: z.string({
      required_error: 'Facility location is required',
      invalid_type_error: 'Facility location is invalid',
    }),
    isDeleted: z.boolean().optional(),
  }),
})

const updateFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    images: z.array(z.string()).optional(),
    description: z.string().optional(),
    shortDescription: z.string().optional(),
    category: z.string().optional(),
    rating: z.number().optional(),
    capacity: z.number().optional(),
    openHours: z.string().optional(),
    highlight: z.string().optional(),
    pricePerHour: z.number().optional(),
    location: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
})

export const FacilityValidation = {
  createFacilityValidationSchema,
  updateFacilityValidationSchema,
}
