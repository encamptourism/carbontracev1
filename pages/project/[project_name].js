import {ProjectData} from '../../components/project/projectdata';
import Link from "next/link";

const Project_name=({project})=>{

return (
	    <>
	  <div>
{
	(project && project.length > 0 ) ? project.map((obj,key)=>{

       return (
       	   <div  key={key}>
       	    <section className="project3__topbar__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project3__topbar__content" data-aos="zoom-in" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="project3__back__btn">
                                <Link href="#"><a><i className="far fa-arrow-left"></i>Back</a></Link>
                            </div>
                            <div className="project3__topbar__title">
                                <h2>{obj.project_heading || ""}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="project3__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="project3__left__img" data-aos="zoom-in" data-aos-delay="50"
                            data-aos-duration="1000">
                            <img src="../assets/img/project/p2.jpg" alt=""/>
                            </div>
                           <div className="project3__left__btn" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <Link href="#"><a className="common__btn">Share</a></Link>
                            <Link href="#"><a className="common__btn green right">Offset my carbon footprint</a></Link>
                          
                        </div>
                    </div>
                     <div className="col-lg-6">
                        <div className="project3__right__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">


                        </div>
                     </div>

                </div>
            </div>



        </section>
    </div>
       	      )
	}):""



 }

        </div>
         </>
         )
	    	}
export default Project_name;

export async function getStaticPaths() {

let obj = ProjectData.map((sd)=>{

return {
	params:{project_name:`${sd.project_name}`}

}

})


  return {
    paths: [...obj],
    fallback: false,
  }
}

export async function getStaticProps(context){

const {params} = context;
const project_name = params.project_name;

let project = ProjectData.filter((fil)=>fil.project_name === project_name);

return {
	props:{project:project}
}

}