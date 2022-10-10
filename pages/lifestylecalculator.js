import { useState,useEffect } from "react";
import HtmlHead from '../components/common/HtmlHead';
import Header from '../components/common/Header';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import MainlifeCalculator from "../components/lifestylecalculator/mainlifecalculator";
import {lifestyleQuestion} from "../components/lifestylecalculator/travelCalcQues";
import Footer from '../components/common/Footer';

const LifestyleCalculator=()=>{

const [typecalculator,setTypecalculator] = useState('');
const [upnext,setUpnext] = useState(0);
const [calculationdata,setCalculationdata] = useState({howmuchelectricity:'',howmanypeopleinhouse:'',howmuchmeateatperday:'',kindoftravelmode:'',noofkmtravel:0,howmanyflightayear:'',howmanykmtrainayear:"",renewableenergy:"",travelby:"Kilometers"});

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
    lifestyleQuestion={lifestyleQuestion} 
    typecalculator ={typecalculator}
    setUpnext={setUpnext}
    upnext={upnext}
    calculationdata={calculationdata}
    setCalculationdata={setCalculationdata}
    />
    <Footer/>

	</>)


}
export default LifestyleCalculator;