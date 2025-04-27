
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllMealPreferenceQuery, useSendReplyMutation } from "@/redux/featured/mealPreference/mealPreferenceApi";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

const AllMealPreferencePage = () => {

    const [reply , setReply] = useState("") ;
    const { data, isLoading, isError } = useGetAllMealPreferenceQuery(undefined);
    const [sendReply] = useSendReplyMutation() ;

    if (isLoading) return <p className="text-center py-6">Loading...</p>;
    if (isError) return <p className="text-center text-red-500 py-6">No meals preference found or Failed to load meal preferences.</p>;

    const preferences = data?.data?.result || [];

    const handleSendReply = async (e : any , id : string) => {
        e.preventDefault() ;
        const {data} = await sendReply({id , reply}) ;
        if(data?.success){
            toast.success(data?.message) ;
        }
        else{
            toast.success(data?.message) ;
        }
    }

    return (
        <div className="max-w-[1440px] mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">All Meal Preferences</h1>

        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
                <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Dietary</th>
                <th className="px-4 py-2 border">Ingredients</th>
                <th className="px-4 py-2 border">Reply</th>
                <th className="px-4 py-2 border">Created At</th>
                <th className="px-4 py-2 border">Reply</th>
                </tr>
            </thead>
            <tbody>
                {
                    preferences && preferences?.map((item: any, index: number) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{item.title}</td>
                        <td className="px-4 py-2 border">{item.description}</td>
                        <td className="px-4 py-2 border">{item.dietary}</td>
                        <td className="px-4 py-2 border">{item.ingredients.join(", ")}</td>
                        <td className="px-4 py-2 border text-gray-700 italic">
                        {item.reply ? item.reply : <span className="text-gray-400">No reply yet</span>}
                        </td>
                        <td className="px-4 py-2 border">{format(new Date(item.createdAt), "PPP")}</td>
                        <td className="flex gap-2 items-center p-1 justify-center border">
                            <form onSubmit={(e) => handleSendReply(e , item?._id)} className="flex gap-2 items-center w-full">
                                <Input onChange={(e) => setReply(e.target.value)} placeholder="Send reply..." className="w-full"/>
                                <Button type="submit">Send</Button>
                            </form>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllMealPreferencePage;
