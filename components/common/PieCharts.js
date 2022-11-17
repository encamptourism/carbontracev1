import { Chart } from "react-google-charts";

const PieCharts =(props)=>{
const {finalpieobject} = props;
const options= {
                 title: "",
                 is3D: true,
               };
return (
         <div className="result__point__wrap" style={{width:'100%',maxWidth: '100%'}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="result__main__point d-md-flex d-lg-flex">
                                    <div className="result__single__point">
                                      
                                          {(finalpieobject.length > 0) ? <Chart
                                                                         chartType="PieChart"
                                                                         data={finalpieobject}
                                                                         options={options}
                                                                         height="300px"
                                                                         width="700px"
                                                                       />:""}
                                  
   
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
	)

}
export default PieCharts;