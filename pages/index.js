import { useEffect, useState } from "react";
import HtmlHead from "../components/common/HtmlHead";
import Header from "../components/common/Header";
import Contactus from "../components/common/Contactus";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import adminapi from "../api/adminapi";
import HeroSlider from "../components/HeroSlider";
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
  const suscRibeas = async (e) => {
    e.preventDefault();
    let errorx = { ...suscribeerr };
    if (suscribe.susemail === "" && !validateEmail(suscribe.susemail)) {
      errorx = { ...errorx, susemail: "Email Required" };
    } else {
      errorx = { ...errorx, susemail: "" };
    }

    if (errorx.susemail === "" && errorx.issuscribe === "") {
      setBloadings(true);
      try {
        const response = await adminapi.post(
          "/subscribe",
          JSON.stringify({ email: suscribe.susemail, tag: "carbon" }),
        );
        if (response.data._id) {
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

  const validateEmail = (emails) => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emails.match(validRegex)) {
      return true;
    } else {
      return false;
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
      <Header toggle={toggle} setToggle={setToggle} theme="light" />
      <main className="main overflow-hidden">
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
        <HeroSlider />
        {/* 🔥 NEW INVESTOR SECTIONS */}
        <FounderNoteSection />
        <DigitalPassportSection toggle={toggle} setToggle={setToggle} />
        <PricingSectionPro toggle={toggle} setToggle={setToggle} />

{/*         <section className="usage__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="usage__title collaborator__title__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <h2>Why should I join CarbonTrace?</h2>
                  <p>
                    We built CarbonTrace to let anybody become a climate
                    champion. Besides working out your climate impact in no
                    time, you’ll join the growing community of changemakers who
                    are taking on-the-ground climate action to save our planet.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div
                  className="usage__single__blk"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="usage__img__blk">
                    <img src="assets/img/home/u1.png" alt="" />
                  </div>
                  <div className="usage__content__blk">
                    <h4>Gain rewards & buy sustainable goods.</h4>
                    <p>
                      We appreciate that motivation is a key driver in the
                      struggle against climate change. That’s why CarbonTrace is
                      rewarding your eco-friendly efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="usage__single__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="usage__img__blk">
                    <img src="assets/img/home/u2.png" alt="" />
                  </div>
                  <div className="usage__content__blk">
                    <h4>Get tax deductions on your carbon credits purchase</h4>
                    <p>
                      Being a for-profit business, CarbonTrace cannot directly
                      grant you tax exemptions on your credit purchase. Having
                      said that, we partner with many NGOs and charities that
                      can.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="usage__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="usage__img__blk">
                    <img src="assets/img/home/u3.jpg" alt="" />
                  </div>
                  <div className="usage__content__blk">
                    <h4>Secure your life insurance</h4>
                    <p>
                      Here’s the deal. If you don’t chip in today, you may not
                      have a planet tomorrow. And without a planet, what are you
                      going to use the money for? Investing in CarbonTrace is
                      like life insurance.
                      <br />
                      Become a climate champion today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="vision__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <div
                  className="vision__left__blk"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/home/vision_img.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div
                  className="vision__right__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <span>OUR VISION</span>
                  <h2>Empower Proactive Climate Action</h2>
                  <p>
                    Equip Individuals & Organizations to Drive Community-Led
                    Climate Initiatives Actively and Effectively.
                  </p>
                  <Link href="#">
                    <a>Explore</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="measure__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="measure__main__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="measure__img__blk mb-5">
                    <img src="assets/img/home/measure_img.jpg" alt="" />
                  </div>
                  <div className="measure__title">
                    <h2>Methodology to Measure</h2>
                    <p>
                      The CarbonTrace’s carbon footprint calculator—one of the
                      most advanced currently available in India—calculates the
                      personal carbon footprint of an individual in a year based
                      on her/his personal lifestyle (e.g., energy consumption,
                      food & travel habits). Users will only need to answer a
                      few straightforward questions.{" "}
                      <Link href="/methodology">
                        <a id="explore">Read more</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vision__area mission__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div
                  className="vision__right__blk mission__left__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <span>OUR MISSION</span>
                  <h2>To Reduce Impact of Climate Change</h2>
                  <p>
                    We built CarbonTrace to let anybody become a climate
                    champion. Besides working out your climate impact in no
                    time, you’ll join the growing community of changemakers who
                    are taking on-the-ground climate action to save our planet.
                  </p>
                  <Link href="#">
                    <a>Explore</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 order-first order-md-last order-lg-last">
                <div
                  className="vision__left__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/home/mission_img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="know__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className="know__main__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <span>DID YOU KNOW</span>
                  <h2>
                    The average carbon footprint of every person in India was
                    estimated at 0.56 tonne per year
                  </h2>
                  <Link href="/lifestylecalculator">
                    <a>Let’s calculate mine!</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collaborators__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className="collaborator__title__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <h2>Our Supporters</h2>
                  <p>
                    We’re excited to receive support across multiple sectors,
                    from fintech startups & prestigious financial institutions
                    to global leaders in IT services.
                  </p>
                </div>
              </div>
            </div>
            <div className="collaborators__main__blk">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/aic.png" alt="aic" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/cisco.png" alt="cisco" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/hdfc.png" alt="hdfc" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/sap-ariba.png" alt="SAP-Ariba.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/iie.png" alt="iie.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/nvcl.png" alt="nvcl.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/img/assam_startup.png"
                      alt="assam_startup.png"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/tata_logo.png" alt="tata_logo.png" />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/needp.png" alt="needp.png" />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/aidc.png" alt="aidc.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/wtf.png" alt="wtf.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/gcp.png" alt="gcp.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/img/investindia.png"
                      alt="investindia.png"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/img/startup_india.png"
                      alt="startup_india.png"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/img/missionlife.jpg"
                      alt="missionlife.jpg"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-2">
                  <div
                    className="collaborators__single__blk"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <img src="assets/img/aws.png" alt="aws.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="media__area">
          <div className="container">
            <div
              className="media__topbar__wrap"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="media__title">
                    <h2>Media Mentions</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://yourstory.com/socialstory/2021/10/sustainability-agenda-encamp-adventures/amp"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/m2.svg"
                        alt="Yourstory"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://gulfnews.com/business/startups-from-indias-north-east-pitch-at-latest-elevate-session-1.1646926641837"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/gn.png"
                        alt="Gulf News"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.tourismdeclares.com/who-has-declared"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/tce.png"
                        alt="Tourism Declares Emergency"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.eastmojo.com/northeast-news/2021/11/24/ne-travel-startup-promotes-eco-friendly-tourism-at-cop26-in-glasgow/"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/m3.svg"
                        alt="East Mojo"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://theprint.in/ani-press-releases/aic-smutbi-plays-catalyst-to-encamp-adventures-1st-big-investment-launches-a-travel-carbon-footprint-calculator-and-expands-deeper-into-northeast-india/1108037/"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/tp.png"
                        alt="The Print"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://restofworld.org/2022/starlink-elon-musk-global-access/"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/rof.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                {/* media logos new */}
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a href="https://niti.gov.in/node/3583" target="new">
                      <img
                        src="assets/img/home/media/missionlife.jpg"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://drive.google.com/file/d/1S4OC7ycnkVWk4VYo17TWKni4IxRCdm5F/view"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/undp.jpg"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.instagram.com/p/CXSgV23sprA/"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/outlook.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.evoindia.com/features/tata-nexon-meghalaya"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/evo.jpg"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.indiaexpo2020.com/news/startups-from-indias-north-east-pitch-at-latest-elevate-session"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/expo2020.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://news.samsung.com/in/samsung-invites-applications-for-solve-for-tomorrow-innovation-competition-youth-of-guwahati-suggest-innovative-ideas-to-solve-real-world-problems"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/samsung.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a
                      href="https://www.zee5.com/articles/aic-smutbi-plays-catalyst-to-encamp-adventures-1st-big-investment-launches-a-travel-carbon-footprint-calculator-and-expands-deeper-into-northeast-india"
                      target="new"
                    >
                      <img
                        src="assets/img/home/media/zee5.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a href="#" target="new">
                      <img
                        src="assets/img/home/media/dailyhunt.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a href="https://ciie.co/portfolio.html" target="new">
                      <img
                        src="assets/img/home/media/ciie.png"
                        alt="Rest of World"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6 pb-5">
                  <div className="media__single__blk">
                    <a href="#" target="new">
                      <img
                        src="assets/img/home/media/jionews.png"
                        alt="Jio News"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="media__bottom__wrap"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="media__content">
                    <h4>
                      “Travel Startup from Assam starts <br />
                      developing a Travel Footprint Calculator”
                    </h4>
                    <p>Linkedin</p>
                    <Link href="#">
                      <a>Read Article</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="measure__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="measure__main__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="measure__title">
                    <h2>Methodology to Measure</h2>
                    <p>
                      The CarbonTrace’s carbon footprint calculator—one of the
                      most advanced currently available in India—calculates the
                      personal carbon footprint of an individual in a year based
                      on her/his personal lifestyle (e.g., energy consumption,
                      food & travel habits). Users will only need to answer a
                      few straightforward questions.
                      <button id="explore" onClick={() => setToggle(true)}>
                        Write to us to know more
                      </button>
                    </p>
                  </div>
                  <div className="measure__img__blk">
                    <img src="assets/img/home/measure_img.jpg" alt="xx" />
                    <Link
                      href="https://www.linkedin.com/posts/world-tourism-forum-lucerne_innovateforindia-wtflucerne-tourismindustry-activity-6874622889501462528-LPA6"
                      target="new"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="team__title"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <h2>Meet the team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div
                  className="team__single__blk"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/ratan.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Ratan Kumar
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/ratan-kumar-58098bb6/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="team__single__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/arun.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Arun Pattnaik
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/arunpattnaik/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>

                    <p>Co-Founder & Product Lead</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/rituraj.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Rituraj Phukan
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/rrajphukan/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Sustainability Director</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/abhijit.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Abhijit Chatterjee
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/abhijit-chatterjee-66883017/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Senior Sustainability Specialist</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/saikat.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Saikat Das
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/saikat92/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Senior Sustainability Specialist</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/sarfaraz.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Sarfaraz H
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/sarfarazhassan/%5C"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Technical Lead</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/jitumoni.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Jitumoni Changkakoty
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/jitumoni-changkakoty-6b851a110/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Product Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/deepak.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Deepak Ahlawat
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/deepak-ahlawat-40a96266/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>QA Lead</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  mt-5">
                <div
                  className="team__single__blk"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="team__img__blk">
                    <img src="assets/img/team/navneet.jpg" alt="" />
                  </div>
                  <div className="team__content">
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Navneet Goswami
                      <span style={{ marginLeft: "5px" }}>
                        <Link
                          href="https://www.linkedin.com/in/navneet-goswami/"
                          passHref
                        >
                          <a target="_new">
                            <img
                              src="assets/img/social/linkedin.png"
                              alt="linkedin.png"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </a>
                        </Link>
                      </span>
                    </h4>
                    <p>Senior Develops Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="subscribe__main__blk"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <div className="subscribe__topbar">
                    <h2>
                      Subscribe to our Newsletter
                      <br />
                      <span className="text-md">
                        to amplify your commitment to sustainability and <br />
                        actively participate in fostering positive change
                        through our initiatives
                      </span>
                    </h2>
                  </div>
                  <form action="">
                    <div className="subscribe__form">
                      <div>
                        {issuccessx ? (
                          <div
                            style={{
                              color: "white",
                              fontStyle: "italic",
                              fontSize: "1.2rem",
                              fontWeight: "600",
                              marginTop: "-1.5rem",
                            }}
                          >
                            Your are Subscribed..
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="subscribe__input">
                          <input
                            id="susemail"
                            name="susemail"
                            className={
                              suscribeerr.susemail !== "" ? "error" : "ghh"
                            }
                            type="email"
                            placeholder="Your email"
                            value={suscribe.susemail || ""}
                            onChange={(e) => onChangeHandler(e)}
                          />
                          <img
                            src="assets/img/home/subscribe_icon.svg"
                            alt="subscribe"
                          />
                        </div>
                      </div>
                      <div className="subscribe__btn">
                        <button
                          onClick={(e) => suscRibeas(e)}
                          type="submit"
                          disabled={bloadings ? true : false}
                        >
                          {bloadings ? (
                            <span
                              className="spinner-border"
                              role="status"
                            ></span>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
