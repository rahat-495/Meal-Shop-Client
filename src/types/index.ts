// Type for Meal / Menu / Product
export type TMeal = {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  dietary: string;
  ingredients: string[];
  available: boolean;
  // createdBy: string;
  // createdAt: string;
  // updatedAt: string;
};

<<<<<<< HEAD

export type TOrder = {
  _id: string;
  email: string;
  customer: string;
  quantity: number;
  totalPrice: number;
  status: string;
  transaction?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
=======
export type TOrder = {
    _id: string;
    email: string;
    quantity: number;
    totalPrice: number;
    status: "Pending" | "Paid" | "Cancelled" | "Shipped" | "Delivered"; // You can adjust based on your app
    createdAt: string;
    updatedAt: string;
  
    transaction: {
      id: string;
      transactionStatus: "Initiated" | "Completed" | "Failed" | string;
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
      createdBy: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  
    __v: number;
}  
>>>>>>> 5b486597bf53c701bca4b478347839cea96c2ce0
