
"use client";
import { useGetMyOrdersQuery } from "@/redux/featured/orders/ordersApi";
import { TOrder } from "@/types";
import Image from "next/image";

const TrackOrdersPage = () => {

    const {data} = useGetMyOrdersQuery(undefined) ;

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
                            <th className="px-4 py-2 border">Transaction</th>
                            <th className="px-4 py-2 border">Ordered At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((order : TOrder, index : number) => (
                            <tr key={order._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{order.id.title}</td>
                                <td className="px-4 py-2 border">
                                    <Image
                                        src={order.id.image}
                                        alt={order.id.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 border">{order.quantity}</td>
                                <td className="px-4 py-2 border">${order.id.price.toFixed(2)}</td>
                                <td className="px-4 py-2 border">${order.totalPrice.toFixed(2)}</td>
                                <td className="px-4 py-2 border font-semibold">Status : {order.status} {order?.status === "Paid" || order?.status === "Pending" ? "Soon will shipped" : ""}</td>
                                <td className="px-4 py-2 border">
                                    <p>ID: {order.transaction.id}</p>
                                    <p>Status: {order.transaction.transactionStatus}</p>
                                </td>
                                <td className="px-4 py-2 border">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrackOrdersPage;
