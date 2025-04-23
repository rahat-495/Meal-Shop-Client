import { z } from 'zod';


const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
];


export const registerSchema = z.object({
    name: z.string({ required_error: "Name is required!" })
        .min(2, 'Name must be at least 2 characters long!')
        .max(50, 'Name is too long!'),

    email: z.string({ required_error: "Email is required!" })
        .email('Invalid email address'),

    password: z.string({ required_error: "Password is required!" })
        .min(6, 'Password must be at least 6 characters long')
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/, 'Password must contain letters and numbers!'),

    confirmPassword: z.string({ required_error: "Cofirm password!" }).min(1),

    phoneNumber: z.string({ required_error: "Phone Number is required!" })
        .regex(/^01[0-9]{9}$/, 'Phone number must be a valid Bangladeshi number!'),

    image: z
        .any()
        // .refine((file) => file instanceof File, 'Image is required!')
        .refine((file) => file && file.size <= MAX_FILE_SIZE, `Max image size is 2MB!`)
        .refine((file) => file && ACCEPTED_IMAGE_TYPES.includes(file.type), 'Only .jpg, .jpeg, .png, .webp formats are supported!'),
});

