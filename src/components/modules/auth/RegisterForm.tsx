"use client";

import logo from "@/assets/logos/Meal Moja Logo Teal Transparen.png";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterForm = () => {
    const form = useForm();
    const [isHidden, setIsHidden] = useState(true);
    const [isHiddenConfirm, setIsHiddenConfirm] = useState(true);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("%cauth, 8", "color: red; font-weight: bold;", data);
    };
    return (
        <div className="max-w-md rounded-lg shadow-boxed px-5 md:px-8 py-5">
            <div className="flex gap-5 items-center justify-center mb-5">
                <Image height={80} width={80} src={logo} alt="Meal Moja" />
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
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Full Name"
                                        {...field}
                                        value={field.value || ""}
                                        required
                                    />
                                </FormControl>
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
                                        required
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Email Address"
                                        {...field}
                                        value={field.value || ""}
                                        required
                                    />
                                </FormControl>
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
                                        required
                                    />
                                </FormControl>
                                <Button
                                type="button"
                                    className="absolute bottom-0 right-0 rounded-s-none"
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    {isHidden ? <EyeOff /> : <Eye />}
                                </Button>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirm-password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={isHiddenConfirm ? "password" : "text"}
                                        placeholder="Confrim Password"
                                        {...field}
                                        value={field.value || ""}
                                        required
                                    />
                                </FormControl>
                                <Button
                                type="button"
                                    className="absolute bottom-0 right-0 rounded-s-none"
                                    onClick={() =>
                                        setIsHiddenConfirm(!isHiddenConfirm)
                                    }
                                >
                                    {isHiddenConfirm ? <EyeOff /> : <Eye />}
                                </Button>
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
                                        value={field.value || ""}
                                        required
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="block mx-auto mt-5 w-20" type="submit">Register</Button>
                    <p className="text-gray-700 text-center">Already have an account? <Link className="text-emerald-700 font-semibold" href="/login">Login Now!</Link></p>
                </form>
            </Form>
        </div>
    );
};

export default RegisterForm;
