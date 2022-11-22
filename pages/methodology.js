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
                            <div className="project3__topbar__title">
                                <h2>MEASUREMENT & OFFSET</h2>
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
                        <p><span className="h4">Step 1: How your carbon footprint is calculated:</span> The CarbonTrace’s carbon footprint calculator—one of
the most advanced currently available in India—calculates the personal carbon footprint of an individual
in a year based on her/his personal lifestyle (e.g., energy consumption, food & travel habits). Users will
only need to answer a few straightforward questions.</p>
<p>We built our greenhouse gas (GHG) emissions calculation methodology upon the most updated and
authoritative standards, including the following:
<li>The Intergovernmental Panel on Climate Change (IPCC) report on GHG Inventories;</li>
<li>The UK Department for Environment, Food and Rural Affairs (DEFRA) guidance on GHG emission</li>
measurement</p>

<p><span className="h4">Step 2: Getting your carbon footprint score:</span> To allow you work out your carbon footprint, our calculator
will condense your inputs into a single and easy-to-understand metric, expressed in kgCO2e. This stands
for kilograms of carbon dioxide equivalent.
To appreciate what CO2e means, you should keep in mind that, while CO2 is the most prevalent GHG we
release in the atmosphere, is not the only one. On top of that, other GHGs like methane or nitrous oxide
have a different global warming potential (GWP) compared to CO2. Put simply, the higher the GHG’s
GWP, the greater its impact on climate change. So, to simplify calculations, the IPCC introduced the CO2e
unit to have a comprehensive GHG emissions estimate.
For comparison purposes, CarbonTrace’s carbon dioxide equivalent calculator will provide you with an
average personal carbon footprint (also expressed in kgCO2e).</p>
<p><span className="h4">Step 3: How to offset your carbon footprint:</span> Once you’ve figured out your carbon impact, you can
leverage our offset services to reduce your footprint. Our platform will prompt you with some carbon
offset options to choose from. You’ll then pick the project you like the most and start offsetting your
carbon emissions from flying and other activities by planting trees for example.</p>
<p><span className="h4">Step 4: Reporting and awareness generation.:</span> With the aim of delivering reliable carbon offset
programs, you’ll be able to access a dashboard where you can check the impact of your emission
compensation projects. Technologies such as QR codes and Geotagging will be used to monitor the
growth of the trees planted as part of the community-led projects. In addition, you can also earn and
encash carbon offset credits whenever you purchase a travel itinerary or any sustainable products listed
on our website.</p>
<p><span className="h4">TRANSPARENCY:</span>You can fund any or all the available carbon offset programmes listed on our website and the
amount you spend will be equally distributed across all projects. For traceability purposes, a
ledger tracker monitors and update in real-time all the details of your contributions.</p>
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