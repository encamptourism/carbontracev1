import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const SliderComponent=(props)=>{
const {typess,name, min,max} = props.lifestylesingleQuestion;
const {calculationdata , setCalculationdata,isnext,setIsnext} = props;


const onchangeHandler=(e)=>{
setCalculationdata({...calculationdata,[e.target.name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}


}


return (
        <>
	   {typess === 'slider' ?
             
              <div className="question__range">
                  <div className="question__range__blk">
                      <div className="slider-wrapper">
                          <div id="employees">  
                          <span style={{position:'absolute',marginTop:'8%'}}>{min} Km</span><span style={{position:'absolute',right:0,marginTop:'8%'}}>{max} Km</span><RangeSlider name={name} min={min} max={max} steps={1} tooltipPlacement='top' tooltip='on' onChange = {(e)=>onchangeHandler(e)}  variant ='success' value={calculationdata[name]}/>
                          </div>
                      </div>
                  </div>
              </div>:""}

        </>
	   )


}
export default SliderComponent;