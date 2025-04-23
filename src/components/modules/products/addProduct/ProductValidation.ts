import { z } from "zod";

export const productSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    image: z.string().url("Must be a valid URL"),
    price: z.coerce.number().positive("Price must be greater than zero"),
    dietary: z.string().min(1, "Dietary info is required"),
    ingredients: z
        .string()
        .min(1, "At least one ingredient is required")
        .transform((val) => val.split(",").map((i) => i.trim())),
    available: z.coerce.boolean(),
});