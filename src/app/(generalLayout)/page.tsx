import MealBoxFaq from "@/components/modules/home/faq/Faq";
import Banner from "@/components/modules/home/hero/Banner";
import FooterSection from "@/components/shared/footersection";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner />
      <MealBoxFaq />
      <FooterSection />
    </div>
  );
};

export default HomePage;
