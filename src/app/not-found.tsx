import LottieRender from "@/components/shared/lottierender";
import notFound from "@/assets/animations/not-found-404.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <LottieRender  animationData={notFound} className="max-w-lg mx-auto" />
            <Link href="/" >
                <Button className="mx-auto mb-8">Back to Homepage</Button>
            </Link>
        </div>
    );
};

export default NotFound;
