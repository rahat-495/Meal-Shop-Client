"use client";

import Lottie from "lottie-react";

interface LottieRenderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animationData: any; 
    loop?: boolean; 
    autoplay?: boolean; 
    className?: string;
    style?: React.CSSProperties;
}

const LottieRender = ({
    animationData,
    loop = true,
    autoplay = true,
    className,
    style,
}: LottieRenderProps) => {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            className={className}
            style={style}
        />
    );
};

export default LottieRender;
