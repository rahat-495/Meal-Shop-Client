import FooterSection from "@/components/shared/footersection";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <FooterSection></FooterSection>
      <div></div>
    </div>
  );
};

export default GeneralLayout;
