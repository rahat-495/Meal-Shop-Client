
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dietaryOptions } from "@/components/modules/products/addProduct/constants";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetSingleMealPreferenceQuery, useUpdateMealPreferenceMutation } from "@/redux/featured/mealPreference/mealPreferenceApi";

type TMealPreferenceForm = {
    title: string;
    description: string;
    dietary: string;
    reply?: string;
    ingredients: { value: string }[];
  };

const UpdateMealPreferenceForm = ({id} : {id : string}) => {

    const router = useRouter();
    const { data, isLoading: fetching, isError } = useGetSingleMealPreferenceQuery(id);
    const [updateMealPreference, { isLoading: updating }] = useUpdateMealPreferenceMutation() ;

    const { register, handleSubmit, control } = useForm<TMealPreferenceForm>({defaultValues : {ingredients: data?.data?.ingredients?.map((item: string) => ({ value: item }))}});

    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control,
    });

    const [dietary, setDietary] = useState<string>(data?.data?.dietary);

    const onSubmit = async (formData: TMealPreferenceForm) => {
        const formattedData = {
        title: formData.title,
        description: formData.description,
        dietary,
        ingredients: formData.ingredients.map((item) => item.value),
        reply: formData.reply || "",
        };

        try {
        const {data} = await updateMealPreference({ id, data: formattedData }).unwrap();
        toast.success("Meal Preference updated successfully!");
        router.push("/dashboard/user/all-meal-preference");
        } catch (err) {
        toast.error("Failed to update meal preference.");
        }
    };

    if (fetching) return <p className="text-center py-6">Loading...</p>;
    if (isError) return <p className="text-center text-red-500 py-6">Failed to fetch meal preference.</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
            <Label htmlFor="title">Title</Label>
            <Input defaultValue={data?.data?.title} id="title" {...register("title", { required: true })} />
            </div>

            <div>
            <Label htmlFor="description">Description</Label>
            <Textarea defaultValue={data?.data?.description} id="description" {...register("description", { required: true })} />
            </div>

            <div>
            <Label htmlFor="dietary">Dietary Type</Label>
            <Select name="dietary" defaultValue={data?.data?.dietary} onValueChange={(value) => setDietary(value)}>
                <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select a dietary tag" />
                </SelectTrigger>
                <SelectContent>
                {dietaryOptions.map((option) => (
                    <SelectItem key={option} value={option} className="cursor-pointer">
                    {option}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            </div>

            <div>
            <Label>Ingredients</Label>
            <div className="space-y-3">
                {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                    <Input
                    defaultValue={data?.data?.ingredients}
                    {...register(`ingredients.${index}.value` as const, { required: true })}
                    placeholder={`Ingredient ${index + 1}`}
                    />
                    <Button type="button" variant="destructive" onClick={() => remove(index)}>
                    ✕
                    </Button>
                </div>
                ))}
                <Button type="button" onClick={() => append({ value: "" })} variant="outline">
                + Add Ingredient
                </Button>
            </div>
            </div>

            <Button type="submit" className="w-full" disabled={updating}>
            {updating ? "Updating..." : "Update Meal Preference"}
            </Button>
        </form>
    );
};

export default UpdateMealPreferenceForm;
