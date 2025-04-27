
"use client";
import { Button } from "@/components/ui/button";
import { useGetMyDataQuery } from "@/redux/featured/users/usersApi";
import Image from "next/image";
import Link from "next/link";

const AdminDashboardPage = () => {
    const {data} = useGetMyDataQuery(undefined) ;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-6">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <Image
                src={data?.data?.profileImage}
                alt={data?.data?.name}
                fill
                className="rounded-full object-cover border-4 border-indigo-500"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">{data?.data?.name}</h2>
          <p className="text-gray-500 text-sm">{data?.data?.role.toUpperCase()}</p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Email</p>
            <p className="text-gray-900 font-medium">{data?.data?.email}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Phone Number</p>
            <p className="text-gray-900 font-medium">{data?.data?.phoneNumber}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Account Created</p>
            <p className="text-gray-900 font-medium">
              {new Date(data?.data.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="">
                <p className="text-gray-600 text-sm">Status</p>
                <p className={`font-medium ${data?.data?.isblocked ? "text-red-500" : "text-green-500"}`}>
                {data?.data?.isblocked ? "Blocked" : "Active"}
                </p>
            </div>
            <Link href={`/dashboard/user/update-preference`} className=""><Button>Update Preference</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
