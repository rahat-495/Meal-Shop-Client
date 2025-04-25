"use client";

import SectionHeading from "@/components/shared/sectionheading";
import Image from "next/image";
import websiteLogo from "@/assets/logos/Meal Moja Logo Teal Transparen.png";
import SearchBar from "@/components/modules/find-meals/searchbar/Searchbar";
import { useGetMealsQuery } from "@/redux/featured/find-meals/mealsApi";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/featured/find-meals/searchSlice";
import LoadingSpinner from "@/components/shared/loadingspinner";
import MealCard, { MealItem } from "@/components/ui/mealCard";

const FindMealsPage = () => {
  const searchTerm = useAppSelector(selectSearchState);
  const { data, isLoading, isError } = useGetMealsQuery(
    { ...searchTerm },
    {
      pollingInterval: 3000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  return (
    <div className="py-12">
      <SectionHeading
        title="Find Your Flavor"
        subtitle="Discover meals that match your cravings.
Fresh picks, every time you search."
      ></SectionHeading>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex justify-start items-center gap-1">
          <Image
            src={websiteLogo}
            alt="Register Now"
            height={35}
            width={35}
            className="aspect-square"
          />
          <p className="font-semibold text-lg lg:text-xl xl:text-2xl">
            Find Meals
          </p>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
      {!isLoading && isError && (
        <div className="text-red-500">
          <p>Something Went Wrong!</p>
        </div>
      )}
      {isLoading && (
        <div className="h-96 flex justify-center items-center">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
        {data?.data?.result.map((mealData: MealItem) => (
          <MealCard key={mealData._id} mealData={mealData}></MealCard>
        ))}
      </div>
    </div>
  );
};

export default FindMealsPage;
