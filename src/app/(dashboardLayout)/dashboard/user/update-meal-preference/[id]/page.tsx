
import UpdateMealPreferenceForm from "@/components/modules/mealPreference/UpdateMealPreferenceForm";

const UpdateMealPreferencePage = async ({ params }: { params: Promise<{id : string}> }) => {

    const {id} = await params;
    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-md border shadow-md mt-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Update Meal Preference</h1>
            <UpdateMealPreferenceForm id={id}/>
        </div>
    );
};

export default UpdateMealPreferencePage;
