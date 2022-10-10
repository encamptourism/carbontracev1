const TextComponent=(props)=>{
const {typess,name,option} = props.lifestylesingleQuestion;
const {calculationdata , setCalculationdata,isnext,setIsnext} = props;

const onchangeHandler=(e)=>{
setCalculationdata({...calculationdata,[e.target.name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}

}

return (
        <>
	   {typess === 'text' ? 

              <div className="question__input">
                <input type="text" name={name} placeholder="Enter number of days" onChange = {(e)=>onchangeHandler(e)} value={calculationdata[name]} onChange = {(e)=>onchangeHandler(e)} value={calculationdata[name]}/>
              
            </div>:""}

        </>
	   )


}
export default TextComponent;