"use client";

import logo from "@/assets/logos/Meal Moja Logo Teal.png";
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

const LoginForm = () => {
    const form = useForm();
    const [isHidden, setIsHidden] = useState(true);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("%cauth, 8", "color: red; font-weight: bold;", data);
    };
    return (
        <div className="max-w-md h-fit rounded-lg shadow-boxed px-5 md:px-8 py-5 mb-5 mt-20 bg-white">
            <div className="flex justify-center">
                <Image
                    height={120}
                    width={120}
                    src={logo}
                    alt="Meal Moja"
                    className="border-4 rounded-full mb-5 -mt-20"
                />
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
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
                                    variant="outline"
                                    className="absolute bottom-0 right-0 rounded-s-none"
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    {isHidden ? <EyeOff /> : <Eye />}
                                </Button>
                            </FormItem>
                        )}
                    />

                    <Button
                        className="w-[90%] mt-5 mx-auto block"
                        type="submit"
                    >
                        Login
                    </Button>
                    <p className="text-gray-700 text-center ">
                        Don&#39;t have an account?{" "}
                        <Link
                            className="text-emerald-700 font-semibold"
                            href="/register"
                        >
                            Register Now!
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
