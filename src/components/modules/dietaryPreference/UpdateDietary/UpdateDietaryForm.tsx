
"use client";
import { dietaryOptions } from "@/components/modules/products/addProduct/constants";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useGetMyDietaryPreferenceQuery, useUpdateDietaryPreferenceMutation } from "@/redux/featured/dietary-preferences/dietaryPreferenceApi";

const UpdateDietaryForm = () => {

    const router = useRouter();
    const { data: preferenceData, isLoading } = useGetMyDietaryPreferenceQuery(undefined);
    const [updateDietaryPreference] = useUpdateDietaryPreferenceMutation();

    const [dietary, setDietary] = useState<string>("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data } = await updateDietaryPreference({ dietary });

        if (data?.success) {
            toast.success(data?.message);
            router.push("/dashboard/profile");
        } else {
            toast.error(data?.message || "Update failed");
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-3 mt-3">
            <h1 className="font-semibold text-xl text-center">Current Preference is : {preferenceData?.data?.dietary}</h1>
            <Select
                defaultValue={preferenceData?.data?.dietary}
                onValueChange={(value) => setDietary(value)}
            >
                <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder={preferenceData?.data?.dietary} />
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
            <Button type="submit">Update</Button>
        </form>
    );
};

export default UpdateDietaryForm;
