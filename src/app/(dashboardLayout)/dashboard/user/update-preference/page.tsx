
import UpdateDietaryForm from "@/components/modules/dietaryPreference/UpdateDietary/UpdateDietaryForm";

const UpdatePreferencePage = () => {
    return (
        <div className='mx-auto max-w-xl min-h-[50vh] flex flex-col items-center justify-center'>
            <div className="border rounded p-3 flex flex-col items-center justify-center w-full">
                <h1 className="font-semibold text-2xl">Update Your Dietary Preferences</h1>
                <UpdateDietaryForm />
            </div>
        </div>
    );
};

export default UpdatePreferencePage;
