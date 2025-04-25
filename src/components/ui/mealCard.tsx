import Image from "next/image";

export type MealItem = {
  _id: string;
  title: string;
  description: string;
  dietary: string;
  image: string;
  ingredients: string[];
  price: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  __v: number;
};

const MealCard = ({ mealData }: { mealData: MealItem }) => {
  console.log(mealData);
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={mealData.image}
        alt={mealData.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {mealData.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {mealData.description}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-medium">Price:</span> ${mealData.price}
        </p>
        <p className="text-sm text-green-600 mt-1">
          {mealData.available ? "Available" : "Not Available"}
        </p>
        <div className="mt-2">
          <span className="text-xs font-medium text-blue-500 bg-blue-100 px-2 py-1 rounded">
            {mealData.dietary}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
