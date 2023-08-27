import {useState,useEffect} from 'react';
import Link from 'next/link';
import {ProjectData} from '../project/projectdata';
import OffsetProject from './OffsetProject';
import PieCharts from './PieCharts';
import DetailsView from './DetailsView';
import Sidebar from "./Sidebar";

const ResultPage=(props)=>{
const [carbonthings,setCarbonthings] = useState({carbonproject:[],firstName:'',lastName:'',contact:'',email:''});
const [error,setError] = useState({carbonproject:'',firstName:'',lastName:'',contact:'',email:''});
const [toggle,setToggle] = useState(false);
const [bloading,setBloading] = useState(false);
const [issuccess,setIssuccess] = useState(false);

const getRandomColor=() =>{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const {totals,setTotals} = props;

useEffect(()=>{
setTotals({...totals,carbonproject:carbonthings.carbonproject,pesonaldetails:{...carbonthings}})
},[carbonthings])

const {cfvalue,muliplier,total,calculationdata} = totals;
let finalmultiplier = muliplier && calculationdata ? {
                       howmanyflightayear : isNaN((muliplier.howmanyflightayear) * cfvalue.renewableenergy) ? 0 : ((muliplier.howmanyflightayear) * cfvalue.renewableenergy).toFixed(2),
                       howmanykmtrainayear : isNaN((muliplier.howmanykmtrainayear) * cfvalue.renewableenergy) ? 0 : ((muliplier.howmanykmtrainayear) * cfvalue.renewableenergy).toFixed(2),
                       howmuchmeateatperday: isNaN((muliplier.howmuchmeateatperday) * cfvalue.renewableenergy) ? 0 : ((muliplier.howmuchmeateatperday) * cfvalue.renewableenergy).toFixed(2),
                       howmuchelectricity: isNaN((muliplier.howmuchelectricity) * cfvalue.renewableenergy) ? 0 : ((muliplier.howmuchelectricity) * cfvalue.renewableenergy).toFixed(2),
                       publictransport: isNaN((muliplier.publictransport) * cfvalue.renewableenergy) ? 0 : ((muliplier.publictransport) * cfvalue.renewableenergy).toFixed(2),

                       }: calculationdata ? {
                       localtransport : isNaN((calculationdata.calculation.totalcalculation.localtransport)) ? 0 : (calculationdata.calculation.totalcalculation.localtransport).toFixed(2),
                       totalaccomdation : isNaN((calculationdata.calculation.totalcalculation.totalaccomdation)) ? 0 : (calculationdata.calculation.totalcalculation.totalaccomdation).toFixed(2),
                       totalfood: isNaN((calculationdata.calculation.totalcalculation.totalfood)) ? 0 : (calculationdata.calculation.totalcalculation.totalfood).toFixed(2),
                       totaltravel: isNaN((calculationdata.calculation.totalcalculation.totaltravel)) ? 0 : (calculationdata.calculation.totalcalculation.totaltravel).toFixed(2),

                       }:"";
let whichcalculator = muliplier ? "Your Annual" : "Your Last Trip";
let finalpieobject = Object.keys(finalmultiplier).map((dd,k)=>{
return [dd,Number(finalmultiplier[dd])/1000]
})

let newchart = [["Activites","rates"],...finalpieobject];
let detailview = [...finalpieobject];

return (
    <main className="main overflow-hidden">
     <Sidebar  setIssuccess={setIssuccess} issuccess={issuccess} totals={totals} ProjectData={ProjectData} carbonthings = {carbonthings} setCarbonthings = {setCarbonthings} bloading ={bloading} setBloading ={setBloading}   setToggle={setToggle} toggle={toggle}   error={error} setError={setError}/>
      <DetailsView whichcalculator={whichcalculator} detailview={detailview} totals={totals}/>
    <OffsetProject ProjectData={ProjectData} setTotals={setTotals} totals={totals} toggle ={toggle} setToggle={setToggle}/>
    </main>)

}
export default ResultPage;