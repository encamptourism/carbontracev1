import Link from "next/link";
const OffsetProject=(props)=>{

const {ProjectData,setTotals,totals} = props;
const selectProject=(id)=>{
 let carbonprojarr = totals.carbonproject;
 if(carbonprojarr.indexOf(id) > -1){
carbonprojarr.splice(carbonprojarr.indexOf(id),1);
 }else{
   carbonprojarr = [...carbonprojarr,id];
 }
setTotals({...totals,carbonproject:carbonprojarr});


}
console.log(totals);
return (
	    <section className="project__area">
            <div className="container">
                <div className="row">
              	     {(ProjectData && ProjectData.length > 0) ? ProjectData.map((data , key)=>{

                 return (
                    <div  key ={key} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="project__single__blk">
                            <div className="project__single__top">
                                <div className="project__img__blk">
                                    <img src={data.image.default} alt={data.project_id}/>
                                </div>
                                <div className="project__info">
                                         <span>Project Id: {data.project_id || ""}</span>
                                        <h4>{data.project_heading || ""}</h4>
                 
                                </div>
                            </div>
                            <div className="project__btn__blk" style={{display: 'flex'}}>
                                 <button style={totals.carbonproject !== "" && totals.carbonproject.includes(data.project_id) ? {border:'none',backgroundColor: '#12022F'}:{border:'none'}} className="common__btn green" onClick={()=>selectProject(data.project_id)}>Offset for this project</button>
                                 <Link href={`/project/${data.project_name}`}><a className="common__btn">Know more</a></Link>
                            </div>
                        </div>
                    </div> 
                    )
                    }):""}              
                </div>
            </div>
        </section>
	   )

}
export default OffsetProject;