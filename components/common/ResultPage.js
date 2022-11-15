import {useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Link from 'next/link';
import {ProjectData} from '../project/projectdata';
import OffsetProject from './OffsetProject';

const ResultPage=(props)=>{
const {totals,setTotals} = props;
console.log(totals);
//travel calculator
if(totals.calculationdata){

}


return (
    <main className="main overflow-hidden">
        <section className="result__area">
            <div className="container">
                <div className="result__wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="result__title">
                                <h2><span>This is annual carbon footprint:</span> {(totals !== "") ? (+totals.total/1000).toFixed(3) : 0} Tons CO2</h2>
                            </div>
                        </div>
                    </div>
                    <div className="result__point__wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="result__main__point d-none d-md-flex d-lg-flex">
                                    <div className="result__single__point">
                                        <div className="result__point__img">
                                         <PieChart data={[
                                                          { title: 'One', value: 10, color: '#E38627' },
                                                        ]}

                                        />
                                        </div>
                                        <div className="result__point__title">
                                            <h4>90.00%</h4>
                                        </div>
                                    </div>
                                    <div className="result__single__point">
                                        <div className="result__point__img mid">
                                          <PieChart
                                                    data={[
                                                          { title: 'One', value: 10, color: '#E38627' },
                                                          { title: 'Two', value: 15, color: '#C13C37' },
                                                          { title: 'Three', value: 20, color: '#6A2135' },
                                                        ]}
                                                    lineWidth={20}
                                                    paddingAngle={18}
                                                    rounded
                                                    label={({ dataEntry }) => dataEntry.value}
                                        />
                                        </div>
                                        <div className="pt-4 result__point__title mid">
                                            <h4>40.00%</h4>
                                        </div>
                                    </div>
                                    <div className="result__single__point">
                                        <div className="result__point__img">
                                           <PieChart data={[
                                                          { title: 'One', value: 10, color: '#E38627' },
                                                         
                                                        ]}
                                        />
                                        </div>
                                        <div className="result__point__title">
                                            <h4>33.00%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <OffsetProject ProjectData={ProjectData} setTotals={setTotals} totals={totals}/>
    </main>)

}
export default ResultPage;