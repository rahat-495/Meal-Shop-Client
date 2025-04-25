"use client";

import SectionHeading from "@/components/shared/sectionheading";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { productSchema } from "@/components/modules/products/addProduct/ProductValidation";
import {
    useGetProductByIdQuery,
    useUpdateProductsMutation,
} from "@/redux/featured/produtcs/productsApi";
import { dietaryOptions } from "@/components/modules/products/addProduct/constants";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/shared/loadingspinner";
import { useEffect } from "react";

const UpdateProductForm = () => {
    const { productId } = useParams();
    const { data, isLoading } = useGetProductByIdQuery(productId);
    const [updateProduct] = useUpdateProductsMutation();
    const currentProduct = data?.data;

    const form = useForm({
        resolver: zodResolver(productSchema),
    });

    useEffect(() => {
        if (currentProduct) {
            form.reset({
                ...currentProduct,
                dietary: currentProduct.dietary,
                ingredients: currentProduct.ingredients.join(", "),
            });
        }
    }, [currentProduct, form]);
    if (isLoading) {
        return <LoadingSpinner />;
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Submitting menu...", { duration: 2000 });
        const { ingredients, ...menu } = data;
        const ingredientsArray = ingredients.split(", ");
        const menuData = {
            ...menu,
            ingredients: ingredientsArray,
        };

        try {
            await updateProduct({
                id: currentProduct?._id,
                data: menuData,
            }).unwrap();
            toast.success("Menu updated successfully!", { id: toastId });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.success(error?.data?.message || "Failed to update menu!", {
                id: toastId,
            });
        }
    };

    return (
        <div className="max-w-lg mx-auto rounded-lg shadow-boxed px-5 md:px-8 py-6 my-8 bg-white">
            <SectionHeading title="Customize a Meal Info" />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Menu</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Menu title"
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe the meal..."
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
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image URL</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://example.com/image.jpg"
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
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price ($)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="Price"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.valueAsNumber
                                            )
                                        }
                                        value={field?.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="dietary"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dietary Tag</FormLabel>
                                <Select
                                    onValueChange={field.onChange}

                                    // value={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue
                                            placeholder={field.value}
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dietaryOptions.map((option) => (
                                            <SelectItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ingredients"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Ingredients (comma separated)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Chicken, Lettuce, Tomato"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message to chef</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your requirements..."
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-3">
                                    <FormControl>
                                        <Input
                                            type="checkbox"
                                            className="w-4"
                                            checked={field?.value ?? false}
                                            onChange={(e) =>
                                                field.onChange(e.target.checked)
                                            }
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        Make this meal available
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">
                        Update Menu
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default UpdateProductForm;
