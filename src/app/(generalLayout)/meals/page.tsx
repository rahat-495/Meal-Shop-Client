import ProductCard from "@/components/modules/products/productCard/ProductCard";
import Pagination from "@/components/shared/pagination";
import SectionHeading from "@/components/shared/sectionheading";
import { getAllProducts } from "@/services/Products";
import { TMeal } from "@/types";

const MealsPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string, limit?:string }>;
}) => {
    // const { page } = await searchParams;
    const query = await searchParams;
    // Get all meals
    const res = await getAllProducts(query?.page,query?.limit,query);

    const products: TMeal[] = res?.data?.result;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 md:max-w-3xl lg:max-w-6xl mx-auto place-items-center px-4">
            <div className="col-span-full">
                <SectionHeading title="See All Meal Plans" subtitle="We provide varities of menu for people with different choice"/>
            </div>

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
