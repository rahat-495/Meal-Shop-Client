/* eslint-disable @typescript-eslint/no-explicit-any */


import Pagination from "@/components/shared/pagination";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {  getAllOrders } from "@/services/Orders";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Trash2 } from "lucide-react";
// import { toast } from "sonner";
// import Swal from "sweetalert2";

const ManageOrdersPage = async () => {
    const res = await getAllOrders(undefined, "20");

    const orders = res?.data;
    // console.log(orders);

    // const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    //     const data = {
    //         id: orderId,
    //         status: newStatus,
    //     };
    //     try {
    //         await updateOrder(data);
    //         toast.success("Order status updated successfully");
    //     } catch (error) {
    //         toast.error("Failed to update order status");
    //         console.error("Error updating order:", error);
    //     }
    // };

    // const handleDelete = async (orderId: string) => {
    //     try {
    //         const result = await Swal.fire({
    //             title: "Are you sure?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, delete it!",
    //         });

    //         if (result.isConfirmed) {
    //             await deleteOrder(orderId);
    //             toast.success("Order deleted successfully");
    //         }
    //     } catch (error) {
    //         toast.error("Failed to delete order");
    //         console.error("Error deleting order:", error);
    //     }
    // };

    // fomat date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Order Management</h1>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Meal</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Payment</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders?.map((order: any) => (
                            <TableRow key={order._id}>
                                <TableCell className="font-medium">
                                    {order._id}
                                </TableCell>
                                <TableCell>
                                    {order.email ||
                                        order.customer?.email ||
                                        "N/A"}
                                </TableCell>
                                <TableCell>
                                    {order.meal?.title || "N/A"}
                                </TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>
                                    ${order.totalPrice.toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    <Select
                                        value={order.status}
                                        // onValueChange={(value) =>
                                        //     handleStatusUpdate(order._id, value)
                                        // }
                                        >
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[
                                                "Pending",
                                                "Paid",
                                                "Preparing",
                                                "Packing",
                                                "Shipped",
                                                "Completed",
                                                "Cancelled",
                                            ].map((status) => (
                                                <SelectItem
                                                    key={status}
                                                    value={status}>
                                                    {status}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    {order.transaction?.method ? (
                                        <span className="capitalize">
                                            {order.transaction.method} -{" "}
                                            {
                                                order.transaction
                                                    .transactionStatus
                                            }
                                        </span>
                                    ) : (
                                        "Not paid"
                                    )}
                                </TableCell>
                                <TableCell>
                                    {formatDate(order.createdAt)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="h-8 w-8 p-0">
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem
                                                // className="text-red-600"
                                                // onClick={() =>
                                                //     handleDelete(order._id)
                                                // }
                                                >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="grid place-items-center mb-5 px-3">
                                <Pagination
                                    totalPage={res?.data?.meta?.totalPage}
                                    page={res?.data?.meta?.page}
                                />
                                </div>
            </div>
        </div>
    );
};

export default ManageOrdersPage;
