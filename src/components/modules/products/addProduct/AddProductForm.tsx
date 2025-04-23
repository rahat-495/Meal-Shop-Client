"use client";

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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { productSchema } from "./ProductValidation";




const AddProductForm = () => {
    const form = useForm({
        resolver: zodResolver(productSchema)
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        toast.success("Product submitted!");
        console.log("Submitted Data:", data);
        form.reset();
    };

    return (
        <div className="max-w-lg h-fit rounded-lg shadow-boxed px-5 md:px-8 py-6 my-8 bg-white">
            <h2 className="text-xl font-semibold mb-4">Add a New Meal</h2>
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe the meal..."
                                        {...field}
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
                                <FormControl>
                                    <Input
                                        placeholder="e.g. LowCarb, Vegan"
                                        {...field}
                                    />
                                </FormControl>
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
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Available?</FormLabel>
                                <FormControl>
                                    <Input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={(e) =>
                                            field.onChange(e.target.checked)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">
                        Submit Product
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default AddProductForm;
