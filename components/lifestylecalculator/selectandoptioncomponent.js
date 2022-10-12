import {useState} from 'react';
const SelectOptionComponent=(props)=>{
const {typess,name,option,layout} = props.lifestylesingleQuestion;
const {calculationdata , setCalculationdata,isnext,setIsnext} = props;
const [optiontoselect , setOptiontoselect] = useState([]);



const onchangeHandler=(e , name)=>{
setCalculationdata({...calculationdata,[name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}

}
const getData=(sc)=>{
setCalculationdata({...calculationdata,travelby:sc});

}


return (
        <>
        {typess === 'select-option' ? <div>
          <div className="question__tab__btn" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
             <ul className="nav nav-tabs" id="myTab" role="tablist">
        {option.map((obj , key)=>{
           return (
               <li  key ={key} className="nav-item" role="presentation">
                 <button className={calculationdata.travelby === Object.keys(obj)[0] ? 'nav-link active' : 'nav-link'} id="home-tab"  type="button" role="tab" aria-controls="home" aria-selected="true" onClick={()=>getData(Object.keys(obj)[0])}>{Object.keys(obj)[0]}</button>
               </li>

            )

        })
         
       } 
             </ul>                             
         </div>
    {
        option.filter((as)=>Object.keys(as)[0] === calculationdata.travelby)[0][calculationdata.travelby].map((data,key)=>{     
        return ( 
            <div key={key} className={layout}>

            <div className="form-check">
            <input className="form-check-input" type="radio" name={name + "_" + data.value} id={name + "_" + data.value} value={data.value} onChange = {(e)=>onchangeHandler(e , name)} checked={calculationdata[name] === data.value ? true : false} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">{data.label}</label>
            </div>
            </div>
                )
                                })
        }
         </div>:""}
        </>
	   )


}
export default SelectOptionComponent;