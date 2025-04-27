
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
import { useState } from "react";
import { useCreateMealPreferenceMutation } from "@/redux/featured/mealPreference/mealPreferenceApi";
import { useRouter } from "next/navigation";

type TMealPreferenceForm = {
  title: string;
  description: string;
  dietary: string;
  ingredients: { value: string }[];
};

const CreateMealPreferencePage = () => {

    const router = useRouter() ;
  const { register, handleSubmit, control, reset } = useForm<TMealPreferenceForm>({
    defaultValues: {
      ingredients: [{ value: "" }],
    },
  });
  const [dietary, setDietary] = useState<string>("");

  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
    control,
  });

  const [createMealPreference, { isLoading }] = useCreateMealPreferenceMutation();

  const onSubmit = async (data: TMealPreferenceForm) => {
      const formattedData = {
          title: data.title,
          description: data.description,
          dietary: dietary,
          ingredients: data.ingredients.map((item) => item.value),
        };

    try {
      const {data} = await createMealPreference(formattedData).unwrap();
      if (!data?.success) {
        toast.error(data?.message || "Meal preference created successfully!");
      }
      reset();
      router.push("/dashboard/user/all-meal-preference")
    } catch (err) {
      toast.error("Something went wrong while creating meal preference.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md border shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Meal Preference</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: true })} placeholder="e.g. Grilled Chicken Salad" />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description", { required: true })}
            placeholder="Write a short description"
          />
        </div>

        <div>
          <Label htmlFor="dietary">Dietary Type</Label>
          <Select
            name="dietary"
            required
            onValueChange={(value) => setDietary(value)}
        >
            <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select a dietary tag" />
            </SelectTrigger>
            <SelectContent>
                {dietaryOptions.map((option) => (
                    <SelectItem
                        key={option}
                        value={option}
                        className="cursor-pointer"
                    >
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Meal Preference"}
        </Button>
      </form>
    </div>
  );
};

export default CreateMealPreferencePage;
