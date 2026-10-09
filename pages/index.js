import { useEffect, useState } from "react";
import HtmlHead from "../components/common/HtmlHead";
import Header from "../components/common/Header";
import Contactus from "../components/common/Contactus";
import AOS from "aos";
import "aos/dist/aos.css";
import adminapi from "../api/adminapi";

// Design System Global Helpers
import Blobs from "../components/Blobs";
import ParticleBackground from "../components/ParticleBackground";
import CustomCursor from "../components/CustomCursor";
import ScrollProgressBar from "../components/ScrollProgressBar";

// Modular Homepage Components
import HomeHero from "../components/home/HomeHero";
import NetZeroInfographic from "../components/home/NetZeroInfographic";
import MethodologySection from "../components/home/MethodologySection";
import ActionCardsSection from "../components/home/ActionCardsSection";
import ImpactChartSection from "../components/home/ImpactChartSection";
import SupportersSection from "../components/home/SupportersSection";
import TeamSection from "../components/home/TeamSection";
import NewsletterSection from "../components/home/NewsletterSection";

// Product & Investor Sections
import FounderNoteSection from "../components/FounderNoteSection";
import DigitalPassportSection from "../components/DigitalPassportSection";
import PricingSectionPro from "../components/PricingSectionPro";

export default function Home() {
  const [enquiry, setEnquiry] = useState({
    message: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });
  const [error, setError] = useState({
    message: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });
  const [bloading, setBloading] = useState(false);
  const [bloadings, setBloadings] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [issuccess, setIssuccess] = useState(false);
  const [issuccessx, setIssuccessx] = useState(false);
  const [suscribe, setSuscribe] = useState({
    susemail: "",
    issuscribe: "",
    tag: "",
  });
  const [suscribeerr, setSuscribeerr] = useState({
    susemail: "",
    issuscribe: "",
  });

  const onChangeHandler = (e) => {
    setSuscribe({ ...suscribe, [e.target.name]: e.target.value });
  };

  const validateEmail = (emails) => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emails.match(validRegex) ? true : false;
  };

  const suscRibeas = async (e) => {
    e.preventDefault();
    let errorx = { ...suscribeerr };
    if (!suscribe.susemail || !validateEmail(suscribe.susemail)) {
      errorx = { ...errorx, susemail: "Valid Email Required" };
    } else {
      errorx = { ...errorx, susemail: "" };
    }

    setSuscribeerr(errorx);

    if (errorx.susemail === "") {
      setBloadings(true);
      try {
        const response = await adminapi.post(
          "/subscribe",
          JSON.stringify({ email: suscribe.susemail, tag: "carbon" }),
        );
        if (response.data && response.data._id) {
          setBloadings(false);
          setSuscribe({ susemail: "", issuscribe: "", tag: "" });
          setIssuccessx(true);
        }
      } catch (error) {
        console.log(error);
        setBloadings(false);
      }
    }
  };

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <HtmlHead />
      {/* Global Background Effects & Custom Cursor */}
      <ScrollProgressBar />
      <Blobs />
      <ParticleBackground />
      <CustomCursor />


      <Header toggle={toggle} setToggle={setToggle} theme="dark" />
      
      <main className="main overflow-hidden bg-[#07060d]">
        {/* Contact Modal */}
        <Contactus
          issuccess={issuccess}
          setIssuccess={setIssuccess}
          toggle={toggle}
          setToggle={setToggle}
          bloading={bloading}
          setBloading={setBloading}
          enquiry={enquiry}
          setEnquiry={setEnquiry}
          error={error}
          setError={setError}
        />

        {/* 1. Hero Section */}
        <HomeHero setToggle={setToggle} />

        {/* 2. Dark Theme Infographics */}
        <NetZeroInfographic />

        {/* 3. Methodology & Vision/Mission */}
        <MethodologySection setToggle={setToggle} />

        {/* 4. Investor & Product Offerings */}
        <FounderNoteSection />
        <DigitalPassportSection toggle={toggle} setToggle={setToggle} />
        <PricingSectionPro toggle={toggle} setToggle={setToggle} />

        {/* 5. 3 Ways to Take Action */}
        <ActionCardsSection setToggle={setToggle} />

        {/* 6. Impact Chart & Benefits */}
        <ImpactChartSection />

        {/* 7. Ecosystem Partners & Media Mentions */}
        <SupportersSection />

        {/* 8. Team Grid */}
        <TeamSection />

        {/* 9. Newsletter Subscription */}
        <NewsletterSection
          suscribe={suscribe}
          onChangeHandler={onChangeHandler}
          suscRibeas={suscRibeas}
          suscribeerr={suscribeerr}
          bloadings={bloadings}
          issuccessx={issuccessx}
        />
      </main>
    </>
  );
}
