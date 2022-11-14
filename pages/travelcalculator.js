import { useState,useEffect } from "react";
import HtmlHead from '../components/common/HtmlHead';
import Header from '../components/common/Header';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import MainlifeCalculator from "../components/travelcalculator/mainlifecalculator";
import {travelQuestion} from "../components/travelcalculator/travelCalcQues";
import Footer from '../components/common/Footer';
import ResultPage from "../components/common/ResultPage";


const TravelCalculator=()=>{

const [typecalculator,setTypecalculator] = useState('');
const [upnext,setUpnext] = useState(0);
const [calculationdata,setCalculationdata] = useState({travelmode:'bike',noofdays:'',nooftraveller:0,kindoftransport:'',kindoftravel:'',kindofvehicle:'',nooftraveller:0,noofkmtravel:0,kindoffood:"",kindofaccomodation:"",noofkmtravelby:0,typeofbike:''});
const [totals,setTotals] = useState('');

useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, []);



return (
	<>
    <HtmlHead/>
    <Header/>
    {totals === "" ? <MainlifeCalculator 
    travelQuestion={travelQuestion} 
    typecalculator ={typecalculator}
    setUpnext={setUpnext}
    upnext={upnext}
    calculationdata={calculationdata}
    setCalculationdata={setCalculationdata}
    setTotals={setTotals}
    />
    :<ResultPage totals={totals}/>
   }
    <Footer/>

	</>)


}
export default TravelCalculator;