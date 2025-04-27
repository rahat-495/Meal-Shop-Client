/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { Button } from "@/components/ui/button";
import { useDeleteMealPreferenceMutation, useGetMyMealPreferenceQuery } from "@/redux/featured/mealPreference/mealPreferenceApi";
import { format } from "date-fns";
import Link from "next/link";
import Swal from "sweetalert2";

const AllMealPreferencePage = () => {

    const [deleteMealPreference] = useDeleteMealPreferenceMutation() ;
    const { data, isLoading, isError } = useGetMyMealPreferenceQuery(undefined);

    if (isLoading) return <p className="text-center py-6">Loading...</p>;
    if (isError) return <p className="text-center text-red-500 py-6">Failed to load meal preferences.</p>;

    const preferences = data?.data || [];

    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await deleteMealPreference(id).unwrap();
                if (!data?.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: data?.message || "Your meal preference has been deleted !",
                        icon: "success"
                    });
                }
                else{
                    Swal.fire({
                        title: "!",
                        text: data?.message || "some thing went wrong!",
                        icon: "success"
                    });
                }
            }
        });
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
                <th className="px-4 py-2 border">Actions</th>
                </tr>
            </thead>
            <tbody>
                {preferences.map((item: any, index: number) => (
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
                    <td className="flex gap-2 items-center justify-center border">
                        <Button onClick={() => handleDelete(item?._id)} className="bg-red-600">Delete</Button>
                        <Link href={`/dashboard/user/update-meal-preference/${item._id}`}>
                            <Button>Update</Button>
                        </Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllMealPreferencePage;
