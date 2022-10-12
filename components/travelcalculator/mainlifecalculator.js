import {useState,useEffect} from 'react';
import SelectComponent from "./selectcomponent";
import TextComponent from "./textcomponent";
import SliderComponent from "./slidercomponent";
import SelectMultipleComponent from "./selectmultiple";

const MainlifeCalculator=(props)=>{

const {travelQuestion,typecalculator,setUpnext,upnext,calculationdata,setCalculationdata} = props;
const [isnext,setIsnext] = useState(true);
const [parentQuestion,setParentQuestion] = useState(travelQuestion.filter((obj)=>obj.dependent !== 'child'));
const [cf,setCf] = useState([]);

const onclickhandler=()=>{

if(upnext < parentQuestion.length -1){
setUpnext(upnext + 1);
if(calculationdata[parentQuestion[upnext].name] !== 0 || calculationdata[parentQuestion[upnext].name] !== ""){
setIsnext(false);    
}else{
 setIsnext(true);    
}
}

}
const onclickbackhandler=()=>{
if(upnext > 0){
setUpnext(upnext - 1);

}

}
const calculate=()=>{
let keydd = [];
let valued =[];
Object.values(calculationdata).map((d , k)=>{
if(d !== 0 && d !== ""){
if(Object.keys(calculationdata)[k] !== "noofdays" && Object.keys(calculationdata)[k] !== "nooftraveller" && Object.keys(calculationdata)[k] !== "noofkmtravelby"){
keydd = [...keydd , Object.keys(calculationdata)[k]];
valued = [...valued , Object.values(calculationdata)[k]]
}
}
})
//getting carbonvalue
let ccvalue = "";
let pkvalue = "";
(keydd.length > 0) && keydd.map((ee,uu)=>{

travelQuestion.map((dosa)=>{
if(dosa.name === ee){
   if(dosa.hasOwnProperty('cf')){
let po = [ee] + '-' + valued[uu];
  ccvalue = {...ccvalue,[po] : dosa.cf[valued[uu]]}
  pkvalue = {...pkvalue,[ee] : dosa.cf[valued[uu]] }
   }

}


})

});

let totalfoodcf = parseFloat(pkvalue.kindoffood) * parseFloat(calculationdata.noofdays) * parseFloat(calculationdata.nooftraveller);
let totalaccomodationcf = parseFloat(pkvalue.kindofaccomodation)  * parseFloat(calculationdata.noofdays) * parseFloat(calculationdata.nooftraveller);
let localtransport = Math.ceil((parseFloat(pkvalue.kindoftransport) * parseFloat(calculationdata.noofdays) * parseFloat(calculationdata.noofkmtravel))/ parseFloat(calculationdata.nooftraveller));
let travelbycf = 0;
if(calculationdata.travelmode === 'car'){
travelbycf = parseFloat(pkvalue.kindofvehicle ? pkvalue.kindofvehicle : pkvalue.kindoftravel);
}
if(calculationdata.travelmode === 'bike'){
travelbycf = parseFloat(pkvalue.typeofbike);
}
if(calculationdata.travelmode === 'bus'){
travelbycf = parseFloat(pkvalue.travelmode);
}
if(calculationdata.travelmode === 'train'){
travelbycf = parseFloat(pkvalue.travelmode);
}
if(calculationdata.travelmode === 'flight'){
travelbycf = parseFloat(pkvalue.typeofflyingroute);
}

let totaltravelcf = Math.ceil(parseFloat(calculationdata.noofkmtravelby) * travelbycf /parseFloat(calculationdata.nooftraveller));

let grand = Math.ceil(totaltravelcf + totalfoodcf + totalaccomodationcf + localtransport);

setCf(ccvalue);
let sdce = {totalcalculation:{totalfood:totalfoodcf,totalaccomdation:totalaccomodationcf,localtransport:localtransport,totaltravel:totaltravelcf},grand:grand,breakup:{...ccvalue}}
setCalculationdata({...calculationdata,calculation:{...sdce}})
alert(grand);
}
console.log(calculationdata);

const translatenumber=(sdd)=>{
if(sdd === '1' || sdd === 1){
return 'one';
}
if(sdd === '2' || sdd === 2){
return 'two';
}
if(sdd === '3' || sdd === 3){
return 'three';
}
if(sdd === '4' || sdd === 4 || sd > 4){
return 'four';
}

}

return (
        <section className="question__area">
            <div className="container">
                <div className="question__wrap">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="question__main__blk">
                                <div className="question__page__number" data-aos="fade-left" data-aos-delay="50"
                                    data-aos-duration="1000">
                                    <span>{`${upnext} / ${parentQuestion.length -1}`}</span>
                                </div>
                                <div className="question__title" data-aos="fade-up" data-aos-delay="50"
                                    data-aos-duration="1000">
                                    <h2>{parentQuestion[upnext].question || ""}</h2>
                                </div>
                              
                                    <div className="question__form__blk question__flex" data-aos="fade-up"
                                        data-aos-delay="50" data-aos-duration="1000">
                                        <div className="row question__radio">
                                        
                                         <SelectComponent travelsingleQuestion={parentQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         <TextComponent travelsingleQuestion={parentQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         <SliderComponent travelsingleQuestion={parentQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         <SelectMultipleComponent travelsingleQuestion={parentQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext} travelQuestion={travelQuestion}/>
                                         
                                        </div>
                                       
                                    </div>
                                  
                                     <div className={upnext <=0 ? "question__btn__blk":"question__btn__blk question__two"}>
                                        {(upnext <=0) ? "" : <button className= "back" onClick={()=>onclickbackhandler()}>Back</button>}
                                       { (upnext === parentQuestion.length -1) ? <button onClick={()=>calculate()}>Calculate</button> : <button onClick={()=>onclickhandler()} disabled={isnext}>Next</button> }
                                    </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 order-first order-md-last order-lg-last">
                            <div className="question__right__blk" data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000">
                                {(typeof travelQuestion[upnext].image ==='string') ? <img src={parentQuestion[upnext].image} alt="tagg"/> : ""}
                                {(typeof travelQuestion[upnext].image ==='object') ? <img src={parentQuestion[upnext].image[calculationdata.travelmode]} alt="tagg"/> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       )


}
export default MainlifeCalculator;