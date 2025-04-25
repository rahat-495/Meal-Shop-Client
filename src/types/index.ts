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
