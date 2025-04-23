import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, Leaf, Utensils, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import mealInBox from "@/assets/meal-banner.jpg";

const Banner = () => {
    return (
        <section className="py-24 md:py-32 bg-emerald-500">
            <div className="container max-w-6xl mx-auto">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="my-6 text-4xl font-bold text-pretty font-ubuntu lg:text-6xl">
                            Plan Meals Effortlessly
                        </h1>
                        <p className="mb-8 max-w-xl  text-gray-50 lg:text-xl">
                            Discover curated meal plans, manage your
                            preferences, and get food delivered to your doorstep
                            with just a few clicks.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button asChild className="w-full sm:w-auto">
                                <Link href="/meals">Explore Meals</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                <Link href="/preferences">
                                    Set Preferences{" "}
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full h-96 border-4 border-white rounded-md relative">
                        <Image
                            src={mealInBox}
                            alt="Delicious meals arranged in boxes"
                            fill
                            className="rounded-md object-cover"
                            priority
                        />
                        <span className="absolute top-5 left-5 bg-white shadow-md p-2 px-4 rounded-md text-sm font-medium flex items-center gap-2">
                            <HeartPulse className="size-4 text-red-500" />
                            Nutritious Meals
                        </span>
                        <span className="absolute top-24 right-12 bg-white shadow-md p-2 px-4 rounded-md text-sm font-medium flex items-center gap-2">
                            <Leaf className="size-4 text-green-500" />
                            Fresh Produce
                        </span>
                        <span className="absolute bottom-16 left-10 bg-white shadow-md p-2 px-4 rounded-md text-sm font-medium flex items-center gap-2">
                            <Utensils className="size-4 text-amber-500" />
                            Balanced Diet
                        </span>
                        <span className="absolute bottom-6 right-6 bg-white shadow-md p-2 px-4 rounded-md text-sm font-medium flex items-center gap-2">
                            <Wallet className="size-4 text-sky-500" />
                            Cost Effective
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
