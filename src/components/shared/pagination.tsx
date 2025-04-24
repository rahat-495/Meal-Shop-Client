"use client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type PaginationProps = {
    totalPage: number;
    page: number
}
const Pagination = ({totalPage, page}: PaginationProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const [currentPage, setCurrentPage] = useState(page || 1);

    const handleDecrement = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        router.push(`${pathName}?page=${currentPage-1}`)
    };

    const handleIncrement = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
        router.push(`${pathName}?page=${currentPage+1}`)
    };
    return (
        <div className="flex items-center gap-2 my-5 md:my-8">
            <Button
                variant="outline"
                disabled={currentPage <= 1}
                onClick={() => handleDecrement()}
            >
                <ArrowBigLeft />
            </Button>
            {[...Array(totalPage)].map((_, index) => (
                <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => {
                        setCurrentPage(index + 1)
                        router.push(`${pathName}?page=${index+1}`)
                    }}
                >
                    {index + 1}
                </Button>
            ))}
            <Button
                variant="outline"
                disabled={currentPage >= totalPage}
                onClick={() => handleIncrement()}
            >
                <ArrowBigRight />
            </Button>
        </div>
    );
};

export default Pagination;
