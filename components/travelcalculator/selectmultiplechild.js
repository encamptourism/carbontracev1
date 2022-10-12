const SelectMultiplechild=(props)=>{
const {obj ,calculationdata,setCalculationdata,isnext,setIsnext} = props;


const onchangeHandler=(e,name)=>{

setCalculationdata({...calculationdata,[name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}


}

return (
		<>
{obj.option.map((op,kk)=>{
                    return (                  
                 <div key ={"sdsdsd" + kk} className="form-check mt-4">
                     <input className="form-check-input" type="radio" name={obj.name + op.value} value={op.value} onChange = {(e)=>onchangeHandler(e,obj.name)} checked={calculationdata[obj.name] === op.value ? true : false}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault1">{op.label}</label>
                 </div>
                      )
                       
                    })}
      </>

	)
}
export default SelectMultiplechild;