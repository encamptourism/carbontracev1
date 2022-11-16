import {useState,useEffect} from 'react';
import Link from 'next/link';
import {ProjectData} from '../project/projectdata';
import OffsetProject from './OffsetProject';
import PieCharts from './PieCharts';
import Sidebar from "./Sidebar";

const ResultPage=(props)=>{
const [carbonthings,setCarbonthings] = useState({carbonproject:[],firstName:'',lastName:'',contact:'',email:''});
const [error,setError] = useState({carbonproject:'',firstName:'',lastName:'',contact:'',email:''});
const [toggle,setToggle] = useState(false);
const [bloading,setBloading] = useState(false);

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
let finalmultiplier = muliplier ? {
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

let finalpieobject = Object.keys(finalmultiplier).map((dd,k)=>{

return {title:dd,value:Number(finalmultiplier[dd]),color:getRandomColor()}

})

return (
    <main className="main overflow-hidden">
    <Sidebar totals={totals} ProjectData={ProjectData} carbonthings = {carbonthings} setCarbonthings = {setCarbonthings} bloading ={bloading} setBloading ={setBloading}   setToggle={setToggle} toggle={toggle}   error={error} setError={setError}/>
        <section className="result__area">
            <div className="container">
                <div className="result__wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="result__title">
                                <h2><span>This is annual carbon footprint:</span> {(totals !== "") ? (+totals.total/1000).toFixed(3) : 0} Tons CO2</h2>
                            </div>
                        </div>
                    </div>
                   <PieCharts finalpieobject ={finalpieobject}/>
                </div>
            </div>
        </section>
        <OffsetProject ProjectData={ProjectData} setTotals={setTotals} totals={totals} toggle ={toggle} setToggle={setToggle}/>
    </main>)

}
export default ResultPage;