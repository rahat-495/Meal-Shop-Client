
"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "@/redux/featured/orders/ordersApi";
import { toast } from "sonner";

export type TOrder = {
    _id: string;
    email: string;
    quantity: number;
    totalPrice: number;
    status: "Pending" | "Processing" | "Delivered" | "Cancelled";
    createdAt: string;
    updatedAt: string;
    transaction: {
      id: string;
      transactionStatus: string;
    };
    customer: {
      _id: string;
      name: string;
      email: string;
      profileImage: string;
    };
    id: {
      _id: string;
      title: string;
      description: string;
      image: string;
      price: number;
      dietary: string;
      ingredients: string[];
      available: boolean;
    };
};  

const OrdersPage = () => {

    const {data} = useGetAllOrdersQuery(undefined) ;
    const [updateStatus] = useUpdateOrderStatusMutation() ;

    const statusArray = ['Pending', 'Paid', "Preparing" , "Packing" , 'Shipped', 'Completed', 'Cancelled'] ;

    const handleUpdateStatus = async (id : string, status : string) => {
        const {data} = await updateStatus({id, status}) ;
        if(data?.success){
            toast.success(data?.message) ;
        }
        else{
            toast.error(data?.message) ;
        }
    };

    return (
        <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">My Orders</h1>
        <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
                <tr className="text-sm text-gray-700">
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Meal</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Transaction</th>
                <th className="px-4 py-3">Date</th>
                </tr>
            </thead>
            <tbody>
                {data?.data && data?.data?.map((order : TOrder) => (
                <tr key={order._id} className="border-t border-gray-200 text-sm">
                    <td className="px-4 py-3 flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={order.customer.profileImage} />
                    </Avatar>
                    <div>
                        <p className="font-medium">{order.customer.name}</p>
                        <p className="text-xs text-gray-500">{order.customer.email}</p>
                    </div>
                    </td>
                    <td className="px-4 py-3">
                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="hover:underline cursor-pointer text-blue-600">
                            {order.id.title}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="max-w-xs text-xs">{order.id.description}</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <p className="text-xs text-gray-500">{order.id.dietary}</p>
                    </td>
                    <td className="px-4 py-3">{order.quantity}</td>
                    <td className="px-4 py-3">${order.totalPrice.toFixed(2)}</td>
                    <td className="px-4 py-3">
                        <Select
                            defaultValue={order?.status}
                            required
                            onValueChange={(value) => handleUpdateStatus(order._id, value)}
                            >
                            <SelectTrigger className="cursor-pointer">
                                <SelectValue placeholder="Update Status" />
                            </SelectTrigger>
                            <SelectContent>
                                {statusArray.map((option) => (
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
                    </td>
                    <td className="px-4 py-3">
                    <p className="font-mono text-xs">{order.transaction.id}</p>
                    <span className="text-xs text-gray-500">{order.transaction.transactionStatus}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
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

export default OrdersPage;
