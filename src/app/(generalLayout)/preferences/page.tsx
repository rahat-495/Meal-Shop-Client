
import DietaryForm from "@/components/modules/dietaryPreference/DietaryForm/DietaryForm";

const page = async () => {
    return (
        <div className='mx-auto max-w-xl min-h-[50vh] flex flex-col items-center justify-center'>
            <div className="border rounded p-3 flex flex-col items-center justify-center">
                <h1 className="font-semibold text-2xl">Set Your Dietary Preferences</h1>
                <div className="">
                    <DietaryForm />
                </div>
            </div>
        </div>
    );
};

export default page;
