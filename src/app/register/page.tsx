import RegisterForm from "@/components/modules/auth/RegisterForm";
import registerImg from '@/assets/auth/register.svg';
import Image from "next/image";

const RegisterPage = () => {

    return (
        <div className='max-w-6xl mx-auto min-h-screen flex flex-row-reverse items-center justify-around gap-5 bg-gray-50 p-3'>
            <div className="hidden md:block self-center md:basis-1/2 shrink-0 justify-items-center">
                <Image
                src={registerImg}
                alt="Register Now"
                height={400}
                width={400}
                className="aspect-square"
                />
            </div>
            <div className="md:basis-1/2 justify-items-center">
            <RegisterForm/>
            </div>
        </div>
    );
};

export default RegisterPage;