import {useEffect , useState} from "react";
import HtmlHead from '../components/common/HtmlHead';
import Header from '../components/common/Header';
import Contactus from '../components/common/Contactus';
import Link from 'next/link';
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const Methodology=()=>{
const router = useRouter();
const [enquiry,setEnquiry] = useState({message:"",firstName:'',lastName:'',contact:'',email:''});
const [error,setError] = useState({message:"",firstName:'',lastName:'',contact:'',email:''});
const [bloading,setBloading] = useState(false);
const [toggle,setToggle] = useState(false);
const [issuccess,setIssuccess] = useState(false);


useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, []);


return (
	<>
    <HtmlHead/>
    <Header toggle = {toggle} setToggle = {setToggle}/>
    <main className="main overflow-hidden">
    <Contactus issuccess = {issuccess} setIssuccess = {setIssuccess} toggle = {toggle} setToggle = {setToggle} bloading = {bloading} setBloading = {setBloading} enquiry = {enquiry} setEnquiry = {setEnquiry} error = {error} setError = {setError}/>
    	 <section className="project3__topbar__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project3__topbar__content" data-aos="zoom-in" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="project3__back__btn">
                              <div style={{cursor:'pointer'}}  onClick={() => router.back()}><a>&larr;Back</a></div>
                            </div>
                            <div className="">
                                <h1>METHODOLOGY</h1>
                                <h3>Measurement and Offsetting of Carbon Footprint with CarbonTrace: Pioneering Sustainable Accountability</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
             <section className="project3__area">
            <div className="container">
                <div className="row">
                 
                     <div className="col-lg-12">
                        <div className="project3__right__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                        <p><span className="h4">Step 1: Calculating Your Carbon Footprint with Precision</span> <br/>At the forefront of ecological accountability, CarbonTrace presents its advanced carbon footprint calculator, a trailblazing solution in India. This tool meticulously computes an individual`&apos;`s annual personal carbon footprint by dissecting their lifestyle components—ranging from energy consumption to dietary and travel preferences. The process is seamless; a handful of direct questions suffices to capture crucial data.<br/><br/>CarbonTrace`&apos;`s commitment to precision is underscored by the integration of authoritative benchmarks, including the Intergovernmental Panel on Climate Change (IPCC) report on GHG Inventories and the UK Department for Environment, Food and Rural Affairs (DEFRA) guidance on GHG emission measurement. These standards, cornerstones of reliable emissions accounting, lend our methodology unparalleled credibility.</p>

                        <p><span className="h4">Step 2: Unveiling Your Carbon Footprint Score</span> <br/>Translating your inputs into an accessible and succinct metric, CarbonTrace`&apos;`s calculator distills information into kgCO2e—kilograms of carbon dioxide equivalent. Delving deeper, it`&apos;`s imperative to grasp the significance of CO2e. While carbon dioxide (CO2) is paramount among the greenhouse gases (GHGs) we release into the atmosphere, it`&apos;`s crucial to acknowledge the presence of other contributors like methane and nitrous oxide, each carrying distinct global warming potentials (GWPs) compared to CO2. To streamline the complexity, the IPCC devised the CO2e metric to furnish a comprehensive estimation of GHG emissions. For contextual comprehension, our calculator yields an average personal carbon footprint, also expressed in kgCO2e.</p>

                        <p><span className="h4">Step 3: Offsetting Carbon Footprint Responsibly</span> <br/>Upon quantifying your carbon impact, CarbonTrace`&apos;`s platform empowers you to mitigate your ecological footprint by availing our offset services. Users are presented with an array of carbon offset alternatives, granting them the autonomy to choose. Opting for a favored project, such as tree planting initiatives, enables the offsetting of carbon emissions incurred through activities like air travel.</p>

                        <p><span className="h4">Step 4: Empowering Transparency and Informed Choices</span> <br/>In our unwavering quest to instill trust and reliability in carbon offset endeavors, CarbonTrace is also further developing a dashboard for project oversight. The integration of advanced technologies such as QR codes and Geotagging ensures real-time monitoring of community-led tree climate action initiatives.</p>

                        <p>Moreover, a novel dimension surfaces with the issuance and redemption of carbon offset credits through sustainable product purchases or travel itineraries, accessible on our website.</p>

                        <p><span className="h4">Transparency Amplified through Blockchain</span> <br/>Distinguished by an ethos of transparency, CarbonTrace is vigorously exploring the integration of blockchain technology. Recognized as a paragon of transparency, blockchain assures an auditable and tamper-proof record of transactions, elevating the authenticity of carbon offset programs.</p>

                        <p><span className="h4">Enabling Corporations for Net Zero Transition</span> <br/>CarbonTrace extends its acumen to the corporate realm, rendering adept support for a seamless transition towards net zero goals. Our seasoned team orchestrates solutions that epitomize fiscal prudence without compromising environmental stewardship. Pragmatic and value-driven, our approach ushers corporations into an era of sustainable practices.</p>

                        <p><span className="h4">Collective Impetus for Climate Resilience</span> <br/>Intrinsically rooted in the belief that collective individual actions form the bedrock of transformative change, CarbonTrace stands firm in rallying the masses against the looming specter of climate change. Our endeavors emanate from technical prowess and unwavering professionalism, devoid of superfluous rhetoric.</p>

                        <p>In essence, CarbonTrace emerges as an embodiment of precision, transparency, and pragmatic transformation, poised to reshape ecological accountability and safeguard our planet`&apos;`s future.</p>

                        </div>
            
                           
                        </div>
                     </div>
                        

                </div>
                </section>
    </main>
    </>
	)

}
export default Methodology;