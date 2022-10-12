import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const SelectMultiplechildone=(props)=>{
const {obj ,calculationdata , setCalculationdata ,isnext,setIsnext} = props;


const onchangeHandler=(e)=>{
 
setCalculationdata({...calculationdata,[obj.name]:e.target.value});
if(e.target.value !=="" || e.target.value  !== 0){
 setIsnext(false);   
}

}

return (
		<>                              
              <div className="question__range">
                  <div className="question__range__blk">
                      <div className="slider-wrapper">
                          <div id="employees">  
                          <span style={{position:'absolute',marginTop:'8%'}}>{obj.min} Km</span><span style={{position:'absolute',right:0,marginTop:'8%'}}>{obj.max} Km</span><RangeSlider name={obj.name} min={obj.min} max={obj.max} steps={1} tooltipPlacement='top' tooltip='on' onChange = {(e)=>onchangeHandler(e)} value={calculationdata[obj.name]} variant ='success'/>
                          </div>
                      </div>
                  </div>
              </div>

                  
      </>

	)
}
export default SelectMultiplechildone;