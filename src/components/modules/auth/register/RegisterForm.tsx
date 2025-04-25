"use client";

import logo from "@/assets/logos/Meal Moja Logo Teal Transparen.png";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterUserMutation } from "@/redux/featured/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { registerSchema } from "./RegisterValidation";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, TUser } from "@/redux/featured/auth/authSlice";
import { verifyToken } from "@/lib/utils/verifyToken";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(registerSchema),
    });
    const router = useRouter()
    const [isHidden, setIsHidden] = useState(true);
    const [isHiddenConfirm, setIsHiddenConfirm] = useState(true);
    const [registerUser] = useRegisterUserMutation();
    const dispatch = useAppDispatch();

    const password = form.watch("password");
    const confirmPassword = form.watch("confirmPassword");

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Signing Up...", { duration: 2000 });

        const formData = new FormData();
        const { image, ...newData } = data;

        formData.append("data", JSON.stringify(newData));
        formData.append("file", image);

        try {
            const res = await registerUser(formData).unwrap();
            toast.success("Signup Successful!", { id: toastId });
            const user = verifyToken(res.data.accessToken) as TUser;
            if (res.success) {
                dispatch(
                    setUser({
                        user: user,
                        token: res.data.accessToken,
                    })
                );
                router.push("/preferences");
            }
            form.reset();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to sign up!", {
                id: toastId,
            });
        }
    };
    return (
        <div className="max-w-md h-fit rounded-lg shadow-boxed px-5 md:px-8 py-5 my-5 bg-white">
            <div className="flex gap-5 items-center justify-center mb-5">
                <Image
                    height={80}
                    width={80}
                    src={logo}
                    alt="Meal Moja"
                    priority={true}
                    quality={70}
                />
                <div>
                    <p className="text-2xl font-semibold font-ubuntu">
                        Register Now!
                    </p>
                    <p className="text-sm text-gray-600 mr-10">
                        Join us and explore varities of meal waiting for you...
                    </p>
                </div>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Full Name"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Email Address"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Email Address"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={isHidden ? "password" : "text"}
                                        placeholder="Enter Password"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                                <Button
                                    type="button"
                                    variant="link"
                                    className="absolute right-0 top-1 translate-y-1/2"
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    {isHidden ? <EyeOff /> : <Eye />}
                                </Button>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            isHiddenConfirm
                                                ? "password"
                                                : "text"
                                        }
                                        placeholder="Confrim Password"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="link"
                                    className="absolute right-0 top-1 translate-y-1/2"
                                    onClick={() =>
                                        setIsHiddenConfirm(!isHiddenConfirm)
                                    }
                                >
                                    {isHiddenConfirm ? <EyeOff /> : <Eye />}
                                </Button>
                                {confirmPassword &&
                                password !== confirmPassword ? (
                                    <FormMessage>
                                        Password did not match
                                    </FormMessage>
                                ) : (
                                    <FormMessage />
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Avatar</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        placeholder="Upload Image"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(e.target.files?.[0])
                                        }
                                        value={field.value?.fileName}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        disabled={password !== confirmPassword}
                        className="mt-5 mx-auto block"
                        type="submit"
                    >
                        Register
                    </Button>
                    <p className="text-gray-700 text-center">
                        Already have an account?{" "}
                        <Link
                            className="text-emerald-700 font-semibold"
                            href="/login"
                        >
                            Login Now!
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default RegisterForm;
