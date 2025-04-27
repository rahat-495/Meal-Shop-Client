
"use client";
import { useGetMyOrdersQuery } from "@/redux/featured/orders/ordersApi";
import { TOrder } from "@/types";
import Image from "next/image";

const OrderMealPage = () => {
  const { data } = useGetMyOrdersQuery(undefined);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Your Meal Orders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((order: TOrder) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-4">
              <Image
                src={order?.id?.image}
                alt={order?.id?.title}
                width={64}
                height={64}
                className="rounded object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{order?.id?.title}</h2>
                <p className="text-sm text-gray-600">Price: ${order?.id?.price.toFixed(2)} / serving</p>
              </div>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>Quantity: <span className="font-medium">{order?.quantity}</span></p>
              <p>Total Price: <span className="font-medium">${order?.totalPrice?.toFixed(2)}</span></p>
              <p>Status: <span className="font-semibold">{order?.status}</span></p>
              {order?.status === "Paid" || order?.status === "Pending" ? (
                <p className="text-green-600">Will be shipped soon</p>
              ) : null}
              <p className="mt-2 text-xs text-gray-500">
                Ordered At: {new Date(order?.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-4 text-sm">
              <h4 className="font-medium mb-1">Transaction Info</h4>
              <p>ID: {order?.transaction?.id}</p>
              <p>Status: {order?.transaction?.transactionStatus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderMealPage;
