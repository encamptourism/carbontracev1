import { PieChart } from 'react-minimal-pie-chart';
const PieCharts =(props)=>{
const {finalpieobject} = props;
return (
         <div className="result__point__wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="result__main__point d-md-flex d-lg-flex">
                                    <div className="result__single__point">
                                        <div className="result__point__img mid">
                                          {(finalpieobject.length > 0) ?  <PieChart
                                                    data={finalpieobject}
                                                    lineWidth={35}
                                                    paddingAngle={18}
                                                    rounded
                                                    label={({ dataEntry }) => `${dataEntry.percentage.toFixed(2)} %`}
                                                    labelStyle= {{
                                                                 fontSize: '5px',
                                                                 fill:'white',
                                                                 fontWeight: '600' 
                                                                }}
                                                    labelPosition={84}
                                        />:""}
                                        </div>
                                        <div className="pt-4 result__point__title mid">
                                            {(finalpieobject.length > 0) ? finalpieobject.map((dss,key)=> <h4 style={{fontSize:'1.2rem'}} key ={key}>{`${dss.title} : ${(dss.value/1000).toFixed(4)}`}</h4>) : ""}
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
	)

}
export default PieCharts;