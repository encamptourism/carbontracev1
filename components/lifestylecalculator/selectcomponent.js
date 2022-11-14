const SelectComponent=(props)=>{
const {typess,name,option,layout} = props.lifestylesingleQuestion;
const {calculationdata , setCalculationdata,isnext,setIsnext} = props;

const onchangeHandler=(e , name)=>{
setCalculationdata({...calculationdata,[name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}

}


return (
        <>
        
	   {typess === 'select' && option.length > 0 ? option.map((data,key)=>{
     
        return ( 
            <div key={key} className={layout}>
            <div className="form-check">
            <input className="form-check-input" type="radio" name={name + "_" + data.value} id={name + "_" + data.value} value={data.value} onChange = {(e)=>onchangeHandler(e , name)} checked={calculationdata[name] === data.value ? true : false}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">{data.label}</label>
            </div>
            </div>)


       }) :""}
        </>
	   )


}
export default SelectComponent;