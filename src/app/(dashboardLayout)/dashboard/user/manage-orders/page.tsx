

"use client";
import { Button } from "@/components/ui/button";
import { useDeleteOrderMutation, useGetMyOrdersQuery } from "@/redux/featured/orders/ordersApi";
import { TOrder } from "@/types";
import Image from "next/image";
import Swal from "sweetalert2";

const ManageOrderPage = () => {

    const {data} = useGetMyOrdersQuery(undefined) ;
    const [deleteOrder] = useDeleteOrderMutation();

    const handleDeleteOrder = async (orderId : string) => {
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
                    const {data} = await deleteOrder(orderId);
                    if (data?.success) {
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                }
            });
    };

    return (
        <div className="p-4">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Track Your Orders</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-4 py-2 border">#</th>
                                    <th className="px-4 py-2 border">Product</th>
                                    <th className="px-4 py-2 border">Image</th>
                                    <th className="px-4 py-2 border">Quantity</th>
                                    <th className="px-4 py-2 border">Price</th>
                                    <th className="px-4 py-2 border">Total</th>
                                    <th className="px-4 py-2 border">Status</th>
                                    <th className="px-4 py-2 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.data?.map((order : TOrder, index : number) => (
                                    <tr key={order._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border">{index + 1}</td>
                                        <td className="px-4 py-2 border">{order?.id?.title}</td>
                                        <td className="px-4 py-2 border">
                                            <Image
                                                src={order?.id?.image}
                                                alt={order?.id?.title}
                                                width={32}
                                                height={32}
                                                className="object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">{order?.quantity}</td>
                                        <td className="px-4 py-2 border">${order?.id?.price.toFixed(2)}</td>
                                        <td className="px-4 py-2 border">${order?.totalPrice?.toFixed(2)}</td>
                                        <td className="px-4 py-2 border font-semibold">Status : {order?.status} {order?.status === "Paid" || order?.status === "Pending" ? "Soon will shipped" : ""}</td>
                                        <td className="px-4 py-2 border">
                                            <Button onClick={() => handleDeleteOrder(order?._id)} className="bg-red-600 font-semibold">Delete Order</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
    );
};

export default ManageOrderPage;
