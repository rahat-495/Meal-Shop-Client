
"use client";
import { Button } from "@/components/ui/button";
import { usePlaceOrderMutation } from "@/redux/featured/orders/ordersApi";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

interface Meal {
    _id : string ;
    price: number;
    available : boolean ;
}

const OrderPlaceBtn = ({ meal }: { meal: Meal }) => {

    const [quantity, setQuantity] = useState<number>(1);
    const user = useSelector((state : RootState) => state.combinedPersist.auth.user)
    const [createOrder] = usePlaceOrderMutation() ;

    const handlePlaceOrder = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to place the order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const data = await createOrder({email : user?.email, id: meal._id, quantity}).unwrap() ;
                if (data?.success) {
                    window.open(data?.data?.checkout_url, '_blank');
                    Swal.fire({
                      title: "Order Placed!",
                      text: "Your order has been placed successfully.",
                      icon: "success"
                    });
                }
                else{
                    Swal.fire({
                      title: "Error",
                      text: data?.message || "Something went wrong!",
                      icon: "error"
                    });
                }
            }
          });
    }

    const handleIncrease = () => meal?.available && setQuantity(prev => prev + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <div className="flex flex-col justify-between pt-4">

            <div className="flex justify-between items-center pt-4">
                <div>
                    <span className="text-2xl font-bold">
                        ${meal.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                        / serving
                    </span>
                </div>
                <Button onClick={handlePlaceOrder} size="lg">Place Order</Button>
            </div>

            <div className="mt-3 flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                <button
                    onClick={handleDecrease}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200 transition"
                >−</button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="px-3 py-1 text-lg font-bold hover:bg-gray-200 transition"
                >+</button>
                </div>
            </div>

        </div>
    );
};

export default OrderPlaceBtn;
