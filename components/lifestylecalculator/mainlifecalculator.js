import {useState,useEffect} from 'react';
import SelectComponent from "./selectcomponent";
import TextComponent from "./textcomponent";
import SliderComponent from "./slidercomponent";

const MainlifeCalculator=(props)=>{

const {lifestyleQuestion,typecalculator,setUpnext,upnext,calculationdata,setCalculationdata} = props;
const [isnext,setIsnext] = useState(true);
const onclickhandler=()=>{

if(upnext < lifestyleQuestion.length -1){
setUpnext(upnext + 1);
if(calculationdata[lifestyleQuestion[upnext].name] !== 0 || calculationdata[lifestyleQuestion[upnext].name] !== ""){
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
console.log(calculationdata);
let totalcarbonfootprint = 0;
let noofkmtravel = calculationdata.noofkmtravel; //multiplier
let nooftraveller = calculationdata.nooftraveller;//multiplier

let cftravelmode = lifestyleQuestion.filter((obj)=>obj.name === 'travelmode')[0].cf[calculationdata.travelmode];
let cfkindoftravel = lifestyleQuestion.filter((obj)=>obj.name === 'kindoftravel')[0].cf[calculationdata.kindoftravel];
let cfkindofvehicle = lifestyleQuestion.filter((obj)=>obj.name === 'kindofvehicle')[0].cf[calculationdata.kindofvehicle]; 
let cfkindoftransport = lifestyleQuestion.filter((obj)=>obj.name === 'kindoftransport')[0].cf[calculationdata.kindoftransport]; 



let cfkindoffood = lifestyleQuestion.filter((obj)=>obj.name === 'kindoffood')[0].cf[calculationdata.kindoffood]; 
let cfkindofaccomodation = lifestyleQuestion.filter((obj)=>obj.name === 'kindofaccomodation')[0].cf[calculationdata.kindofaccomodation];





console.log(cfkindoffood);

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
                                    <span>{`${upnext} / ${lifestyleQuestion.length -1}`}</span>
                                </div>
                                <div className="question__title" data-aos="fade-up" data-aos-delay="50"
                                    data-aos-duration="1000">
                                    <h2>{lifestyleQuestion[upnext].question || ""}</h2>
                                </div>
                              
                                    <div className="question__form__blk question__flex" data-aos="fade-up"
                                        data-aos-delay="50" data-aos-duration="1000">
                                        <div className="row question__radio">
                                        
                                         <SelectComponent travelsingleQuestion={lifestyleQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         <TextComponent travelsingleQuestion={lifestyleQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         <SliderComponent travelsingleQuestion={lifestyleQuestion[upnext]} setCalculationdata={setCalculationdata} calculationdata={calculationdata} isnext={isnext} setIsnext={setIsnext}/>
                                         
                                         
                                        </div>
                                       
                                    </div>
                                  
                                     <div className={upnext <=0 ? "question__btn__blk":"question__btn__blk question__two"}>
                                        {(upnext <=0) ? "" : <button className= "back" onClick={()=>onclickbackhandler()}>Back</button>}
                                       { (upnext === lifestyleQuestion.length -1) ? <button onClick={()=>calculate()}>Calculate</button> : <button onClick={()=>onclickhandler()} disabled={isnext}>Next</button> }
                                    </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 order-first order-md-last order-lg-last">
                            <div className="question__right__blk" data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000">
                                {lifestyleQuestion[upnext].image ? <img src={lifestyleQuestion[upnext].image} alt="tagg"/> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       )


}
export default MainlifeCalculator;