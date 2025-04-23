import LoginForm from "@/components/modules/auth/login/LoginForm";
import Image from "next/image";
import loginImg from '@/assets/auth/login-user.svg';

const LoginPage = () => {
    return (
        <div className="max-w-6xl mx-auto min-h-screen flex items-center justify-around gap-5 bg-gray-50 p-3">
            <div className="hidden md:block self-center md:basis-1/2 shrink-0 justify-items-center">
                <Image
                    src={loginImg}
                    alt="Register Now"
                    height={400}
                    width={400}
                    className="aspect-square"
                />
            </div>
            <div className="md:basis-1/2 justify-items-center">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
