import { useState,useEffect } from "react";
import HtmlHead from '../components/common/HtmlHead';
import Header from '../components/common/Header';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import MainlifeCalculator from "../components/travelcalculator/mainlifecalculator";
import {travelQuestion} from "../components/travelcalculator/travelCalcQues";
import Footer from '../components/common/Footer';


const TravelCalculator=()=>{

const [typecalculator,setTypecalculator] = useState('');
const [upnext,setUpnext] = useState(0);
const [calculationdata,setCalculationdata] = useState({travelmode:'',noofdays:'',nooftraveller:0,kindoftransport:'',kindoftravel:'',kindofvehicle:'',nooftraveller:0,noofkmtravel:0,kindoffood:"",kindofaccomodation:""});

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
    <MainlifeCalculator 
    travelQuestion={travelQuestion} 
    typecalculator ={typecalculator}
    setUpnext={setUpnext}
    upnext={upnext}
    calculationdata={calculationdata}
    setCalculationdata={setCalculationdata}
    />
    <Footer/>

	</>)


}
export default TravelCalculator;