import MealBoxFaq from "@/components/modules/home/faq/Faq";
import Banner from "@/components/modules/home/hero/Banner";
import FooterSection from "@/components/shared/footersection";

const HomePage = () => {

    return (
        <div className=''>
            <Banner/>
            <MealBoxFaq/>
            <FooterSection/>
        </div>
    );
};

export default HomePage;