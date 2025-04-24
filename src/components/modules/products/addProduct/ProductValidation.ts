import { z } from 'zod';

export const productSchema = z.object({
    title: z
        .string({ required_error: 'Meal title is required!' })
        .min(2, 'Meal title must be at least 2 characters long!')
        .max(100, 'Meal title is too long!'),

    description: z
        .string({ required_error: 'Description is required!' })
        .min(10, 'Description must be at least 10 characters long!')
        .max(500, 'Description is too long!'),

    image: z
        .string({ required_error: 'Image URL is required!' })
        .url('Invalid image URL!'),

    price: z
        .number({ required_error: 'Price is required!' })
        .min(0.01, 'Price must be at least $0.01!')
        .max(1000, 'Price cannot exceed $1000!'),

    dietary: z.string({required_error: "Select a tag"}).min(2, "Select a tag"),

    ingredients: z
        .string({ required_error: 'Ingredients are required!' })
        .min(3, 'Ingredients must be at least 3 characters long!')
        .refine(
            (val) => val.split(',').length >= 1,
            'At least one ingredient must be provided!'
        ),

    available: z
        .boolean({ required_error: 'Availability status is required!' }).default(false),
});