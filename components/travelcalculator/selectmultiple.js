import {useState,useEffect} from 'react';
import SelectMultiplechild from "./selectmultiplechild";
import SelectMultiplechildone from "./selectmultiplechildone";

const SelectMultipleComponent=(props)=>{
const {typess,name,option,layout,dependent,subdependent} = props.travelsingleQuestion;
const {calculationdata , setCalculationdata,isnext,setIsnext,travelQuestion} = props;
const [dependencyArr,setDependencyArr] = useState([]);
const {travelall} = {...calculationdata};


const getData=(sc)=>{
let repla ={};
if(calculationdata[name] !== [name]){
repla = {typeofbike:'',noofkmtravelby:0,kindoftravel:'',typeofflyingroute:"",kindofvehicle:"",}

}
  setCalculationdata({...calculationdata,[name]:sc,...repla});



}


useEffect(()=>{
let ddata = (typeof dependent === 'object') ? dependent[calculationdata[name]] : [];

let dmkdata = [];
let subdependency = [];

(ddata.length > 0) && ddata.map((sd)=>{

let asd = travelQuestion.filter((dsf)=>dsf.name === sd);
let asdsdd =[];

if(asd.length > 0){
let sddata = asd[0].subdependent;
if(sddata !== ""){
if(sddata[calculationdata[sd]] && sddata[calculationdata[sd]].length > 0 ){
sddata[calculationdata[sd]].map((bn)=>{
asdsdd = travelQuestion.filter((dsf)=>dsf.name === bn);
})


}

}

}
if(asdsdd.length > 0){
 dmkdata = [...dmkdata,...asd,...asdsdd];   
}else{

dmkdata = [...dmkdata,...asd];   
}

})

setDependencyArr(dmkdata);
},[calculationdata])

return (
        <>
          {typess === 'selectmultiple'?
        <div> 
        <div className="trip__details__tab__btn">
            <div className="trip__details">
            <ul className="nav nav-tabs pl-2">
        {
        option.map((obj , key)=>{
           return (
               <li  key ={key} className="nav-item" role="presentation">
                 <button className={calculationdata[name] === obj.value ? 'nav-link active' : 'nav-link'} id="home-tab"  type="button" role="tab" aria-controls="home" aria-selected="true" onClick={()=>getData(obj.value)}><div className="trip__details__single">{obj.label}</div></button>
               </li>
                   )
                 })
         
        } 
            </ul>
                                    
         </div>
         </div>
            <div>
         {dependencyArr.length > 0 && dependencyArr.map((obj,key)=>{
               if(obj.typess === 'select'){
               return (
                        <div key={key}>
                          <div className="question__title mt-5">
                                    <h2>{obj.question || ""}</h2>
                          </div>
                         {<SelectMultiplechild obj ={obj} calculationdata={calculationdata} setCalculationdata={setCalculationdata} isnext= {isnext} setIsnext ={setIsnext}/>}
                         
                        </div>    
                      )            

               }
            if(obj.typess === 'slider'){
               return (
                        <div key={key}>
                          <div className="question__title mt-3">
                                    <h2>{obj.question || ""}</h2>
                          </div>
                        {<SelectMultiplechildone obj ={obj}  calculationdata={calculationdata} setCalculationdata={setCalculationdata} isnext= {isnext} setIsnext ={setIsnext}/>}
                         
                        </div>    
                      )            

               }

         })}
            
            </div>
        
         </div>
         :""}
        </>
	   )


}
export default SelectMultipleComponent;