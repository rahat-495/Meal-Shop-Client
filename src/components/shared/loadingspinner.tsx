import LottieRender from "./lottierender";
import loadingMeal from "@/assets/animations/loading-meal.json";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-800 bg-opacity-50">
            <LottieRender
                animationData={loadingMeal}
                loop={true}
                autoplay={true}
                className="w-64 h-64"
                style={{ maxWidth: "100%" }}
            />
        </div>
    );
};

export default LoadingSpinner;
