
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { dietaryOptions } from "@/components/modules/products/addProduct/constants";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateDietaryPreferenceMutation } from "@/redux/featured/dietary-preferences/dietaryPreferenceApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const DietaryForm = () => {

    const router = useRouter() ;
    const [createDietaryPreference] = useCreateDietaryPreferenceMutation() ;
    const [dietary, setDietary] = useState<string>("");

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const {data} = await createDietaryPreference({ dietary });
        if(data?.success){
            toast.success(data?.message);
            setDietary("");
            router.push("/") ;
        }
        else{
            toast.error(data?.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-3 mt-3">

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
            <Button type="submit">Add</Button>
        </form>
    );
};

export default DietaryForm;

