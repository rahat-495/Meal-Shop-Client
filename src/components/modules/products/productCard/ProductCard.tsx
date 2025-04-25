import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TMeal } from "@/types";
import { EyeIcon, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImCoinDollar } from "react-icons/im";
import { LuUtensils } from "react-icons/lu";

const ProductCard = ({ product }: { product: TMeal }) => {
  const dietaryBadge = (dietaryTag: string) => {
    return dietaryTag.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

<<<<<<< HEAD
    const dietaryBadge = (dietaryTag: string) => {
        return dietaryTag.replace(/([a-z])([A-Z])/g, "$1 $2");
    };

    return (
        <div className="h-full">
            {/* card  */}
            <Card className="max-w-[350px] h-full">
                <CardHeader className="relative">
                    <span className="absolute top-2 left-8 bg-white shadow-md p-1 px-4 rounded-md text-sm font-medium flex items-center gap-2">
                        <Tag className="size-4 text-amber-500" />
                        {dietaryBadge(product.dietary)}
                    </span>
                    <Image
                        src={product.image}
                        title={product.title}
                        alt={product.title}
                        height={180}
                        width={320}
                        className="rounded-lg w-full object-cover aspect-video"
                    />
                    <CardTitle className="font-ubuntu text-xl mt-3">
                        {product.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>{product.description.slice(0, 85).concat("...")}</p>
                    <p className="flex items-center gap-2">
                        <ImCoinDollar /> Price: {product.price} $
                    </p>
                    <p className="flex items-center gap-2">
                        <LuUtensils />
                        Ingredients:{" "}
                        {product.ingredients
                            .join(", ")
                            .slice(0, 13)
                            .concat("...")}
                    </p>
                </CardContent>
                <CardFooter className="flex mt-auto">
                    <Link className="w-full" href={`/meals/${product._id}`}>
                        <Button className="w-full flex items-center gap-2">
                            <EyeIcon />
                            View Menu
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
=======
  return (
    <div className="h-full">
      {/* card  */}
      <Card className="max-w-[350px] h-full">
        <CardHeader className="relative">
          <span className="absolute top-2 left-8 bg-white shadow-md p-1 px-4 rounded-md text-sm font-medium flex items-center gap-2">
            <Tag className="size-4 text-amber-500" />
            {dietaryBadge(product.dietary)}
          </span>
          <Image
            src={product.image}
            title={product.title}
            alt={product.title}
            height={180}
            width={320}
            className="rounded-lg w-full aspect-video"
          />
          <CardTitle className="font-ubuntu text-xl mt-3">
            {product.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>{product.description.slice(0, 85).concat("...")}</p>
          <p className="flex items-center gap-2">
            <ImCoinDollar /> Price: {product.price} $
          </p>
          <p className="flex items-center gap-2">
            <LuUtensils />
            Ingredients:{" "}
            {product.ingredients.join(", ").slice(0, 13).concat("...")}
          </p>
        </CardContent>
        <CardFooter className="flex mt-auto">
          <Link className="w-full" href={`/meals/${product._id}`}>
            <Button className="w-full flex items-center gap-2">
              <EyeIcon />
              View Menu
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
>>>>>>> f9bc3a83dc9079cf256d2f2807193b1600cbcf36
};

export default ProductCard;
