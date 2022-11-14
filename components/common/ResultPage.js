import { PieChart } from 'react-minimal-pie-chart';
import Link from 'next/link';

const ResultPage=(props)=>{
const {totals,muliplier,cfvalue} = props;



return ( <main className="main overflow-hidden">
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
        <section className="project__topbar__area" stle={{paddingTop: '15px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project__topbar__content" data-aos="zoom-in" data-aos-delay="50"
                            data-aos-duration="1000">
                            <h1>Solutions to reduce your carbon footprint</h1>
                            <p>We aimed to empower you with the most effective way to reduce the carbon footprint you
                                create through your day-to-day activities. CarbonTrace supports climate action projects
                                that have a positive impact on the local environment and communities, thus providing you
                                with the best way to offset your carbon footprint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="project__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="project__single__blk" data-aos="fade-right" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="project__single__top">
                                <div className="project__img__blk">
                                    <a href="#"><img src="assets/img/project/p1.jpg" alt=""/></a>
                                </div>
                                <div className="project__info">
                                    <span>Project 1</span>
                                    <h4>Preservation of native flora and fauna, restoration, and forestation</h4>
                                </div>
                            </div>
                            <div className="project__btn__blk">
                                <a href="#" className="common__btn">Offset this Project</a>
                            </div>
                        </div>
                    </div>
               
                   
                </div>
            </div>
        </section>
    </main>)

}
export default ResultPage;