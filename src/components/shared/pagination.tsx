"use client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    totalPage: number;
    page: number;
};
const Pagination = ({ totalPage, page }: PaginationProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`${pathName}?${params.toString()}`);
    };

    const handleDecrement = () => {
        if (page > 1) {
            handlePageChange(page - 1);
        }
    };

    const handleIncrement = () => {
        if (page < totalPage) {
            handlePageChange(page + 1);
        }
    };

    // ekpage or data match na korle show hobe na
    if (totalPage <= 1) return null;
    return (
        <div className="flex items-center gap-2 my-5 md:my-8">
            <Button
                variant="outline"
                disabled={page <= 1}
                onClick={() => handleDecrement()}>
                <ArrowBigLeft />
            </Button>
            {[...Array(totalPage)].map((_, index) => (
                <Button
                    key={index}
                    variant={page === index + 1 ? "default" : "outline"}
                    onClick={() => {
                        handlePageChange(index + 1);
                    }}>
                    {index + 1}
                </Button>
            ))}
            <Button
                variant="outline"
                disabled={page >= totalPage}
                onClick={() => handleIncrement()}>
                <ArrowBigRight />
            </Button>
        </div>
    );
};

export default Pagination;
