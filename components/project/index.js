import Link from "next/link";
import Subscription from "./subscription";
import Quoat from "./quoat";
const ProjectComponent=(props)=>{

const {ProjectData} = props;

return (
         <>
            <section className="project__topbar__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project__topbar__content" data-aos="zoom-in" data-aos-delay="50"
                            data-aos-duration="1000">
                            <h1>Solutions to reduce your carbon footprint</h1>
                            <p>We aimed to empower you with the most effective way to reduce the carbon footprint you create through your day-to-day activities. CarbonTrace supports climate action projects that have a positive impact on the local environment and communities, thus providing you with the best way to offset your carbon footprint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {
          (ProjectData && ProjectData.length > 0) ? ProjectData.map((data , key)=>{

         return (
         <div key ={key}>
        <section className="project__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project__single__wrap" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="row g-5">
                                <div className="col-lg-6 col-md-6">
                                    <div className="project2__img__blk">
                                        <img src={data.image.default} alt={data.project_id}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="project2__right__blk">
                                        <span>Project Id: {data.project_id || ""}</span>
                                        <h4>{data.project_heading || ""}</h4>
                                        <p>{data.project_short_description || ""}</p>
                                        <div className="project2__btn__blk">
                                            <Link href="#"><a className="common__btn green">Offset for this project</a></Link>
                                            <Link href={`/project/${data.project_name}`}><a className="common__btn">Know more</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

             	    )


          })
         	:""
    }   
        <Quoat/>
        <Subscription/>
        </>
	   )

}
export default ProjectComponent;