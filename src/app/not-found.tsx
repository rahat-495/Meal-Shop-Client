import LottieRender from "@/components/shared/lottierender";
import notFound from "@/assets/animations/not-found-404.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="relative">
            <LottieRender animationData={notFound} className="h-screen" />
            <Link href="/" className="fixed bottom-16 left-1/2 -translate-x-1/2">
                <Button className="cursor-pointer">Back to Homepage</Button>
            </Link>
        </div>
    );
};

export default NotFound;
