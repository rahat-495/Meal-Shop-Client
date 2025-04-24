import ProductCard from "@/components/modules/products/productCard/ProductCard";
import Pagination from "@/components/shared/pagination";
import { getAllProducts } from "@/services/Products";
import { TMeal } from "@/types";

const MealsPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    // Get all meals
    const res = await getAllProducts(page);

    const products: TMeal[] = res?.data?.result;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 md:max-w-3xl lg:max-w-6xl mx-auto place-items-center px-4">
            {products?.map((product: TMeal) => (
                <ProductCard key={product._id} product={product} />
            ))}
            <div className="col-span-full">
                <Pagination
                    totalPage={res?.data?.meta?.totalPage}
                    page={res?.data?.meta?.page}
                />
            </div>
        </div>
    );
};

export default MealsPage;
