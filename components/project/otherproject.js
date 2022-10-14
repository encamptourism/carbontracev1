import {useState,useEffect} from "react";
import Link from "next/link";

const OtherProject=(props)=>{
const {project_id,ProjectData} = props;
const [otherData,setOtherData] = useState([]);

useEffect(()=>{

let fo = ProjectData.filter((project)=>project.project_id !== project_id);
setOtherData(fo);
},[project_id])


return (
	    <>
	     <div className="row">
                    <div className="col-lg-12">
                        <div className="project3__other" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                            <span>Other Projects</span>
                        </div>
                    </div>
                </div>
         <div className="row">
	    {(otherData && otherData.length > 0) ?
         otherData.map((other,key)=>{

         return (
         	      <div key={key} className="col-lg-6 col-md-6 col-sm-6">
                        <div className="project__single__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="project__single__top">
                             <div className="project__img__blk project3">
                                    <Link href={`${other.project_name}`}><a><img src={other.image.other} alt={other.project_id}/></a></Link>
                                </div>
                              <div className="project__info">
                                    <span>{other.project_id}</span>
                                    <h4>{other.project_heading}</h4>
                                </div>
                               <div className="project__btn__blk">
                                <Link href={`${other.project_name}`}><a className="common__btn">Know more</a></Link>
                            </div>
                            </div>
                        </div>
                  </div>
         	    )


         })

	     :""}
	     </div>
	    </>
	    )

}
export default OtherProject;