import{useState} from "react";

const Sidebar=(props)=>{

const {issuccess,setIssuccess,toggle,setToggle,bloading,setBloading,carbonthings,setCarbonthings,error,ProjectData , totals,setError} = props;


const selectCarbon=(val)=>{
let carbonprojarr = carbonthings.carbonproject;
 if(carbonprojarr.indexOf(val) > -1){
carbonprojarr.splice(carbonprojarr.indexOf(val),1);
 }else{
   carbonprojarr = [...carbonprojarr,val];
 }
setCarbonthings({...carbonthings,carbonproject:carbonprojarr});
setToggle(true);
}


const onChangeHandler=(e)=>{
setCarbonthings({...carbonthings,[e.target.name]:e.target.value})

}
const validateEmail=(emails)=>{
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(emails.match(validRegex)){
    return true;
}else{
    return false;
}


}


const submitDetails=()=>{
//setBloading(true);
let acterror = {...error};
if(carbonthings.firstName === ""){
acterror = {...acterror,firstName:'FirstName Required'};
}else{
 acterror = {...acterror,firstName:''};   
}
if(carbonthings.lastName === ""){
acterror = {...acterror,lastName:'LastName Required'};
}else{
 acterror = {...acterror,lastName:''};   
}
if(carbonthings.contact === "" || carbonthings.contact.length < 10 || carbonthings.contact.length > 13 ){
acterror = {...acterror,contact:'Mobile Number Required'};
}else{
 acterror = {...acterror,contact:''};   
}
if(carbonthings.email === "" || !validateEmail(carbonthings.email)){
acterror = {...acterror,email:'Email Required'};
}else{
 acterror = {...acterror,email:''};   
}
if(carbonthings.travelDate === ""){
acterror = {...acterror,travelDate:'Date Required'};
}else{
 acterror = {...acterror,travelDate:''};   
}
if(carbonthings.carbonproject.length === 0){
  acterror = {...acterror,carbonproject:'Select atleast a Project'};    
}else{
  acterror = {...acterror,carbonproject:''};   
}
setError(acterror);
let setter = false;
for(let obj in acterror){
if(acterror[obj] !== ""){
setter = true;
return;
}
}

if(!setter){
setBloading(true);

console.log(totals);
setIssuccess(true);
setCarbonthings({carbonproject:[],firstName:'',lastName:'',contact:'',email:''});
setTimeout(()=>{setToggle(false);setBloading(false);},10000);


}
}

return ( 
       <>
       <div className={toggle ? "sidebar__area active" : "sidebar__area"}>
        <div className="sidebar__main__blk">
            <div className="sidebar__title">
                <h4>Submit Details</h4>
                <h6 style={{fontSize:'1rem',cursor:'pointer',position: 'absolute',right:'10px',top:'20px'}} onClick={()=>{setToggle(false)}}>close</h6>
            </div>
        <div className="sidebar__total__price mb-3">
                
            </div>
        <form action="">
                <div className="sidebar__form__wrap">
                    <span className="sidebar__lebel">Primary Details</span>
                    <div className="sidebar__form__single">
                        <label htmlFor="">First Name</label>
                        <input  name="firstName" className={error && error.firstName ? "error" : "dff"} id="firstName" type="text" onChange={(e)=>onChangeHandler(e)} value={carbonthings.firstName}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Last Name</label>
                        <input className={error && error.lastName ? "error" : "dff"} type="text" name="lastName" id="lastName" onChange={(e)=>onChangeHandler(e)} value={carbonthings.lastName}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Contact</label>
                        <input type="text" className={error && error.contact ? "error" : "dff"} placeholder="+91" name="contact" id="contact" onChange={(e)=>onChangeHandler(e)} value={carbonthings.contact}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Email</label>
                        <input type="email" className={error && error.email ? "error" : "dff"} placeholder="your@domain.com" name="email" id="email" onChange={(e)=>onChangeHandler(e)} value={carbonthings.email}/>
                    </div>
                </div>
            </form>
           
            <span style={{color:'red',marginBottom: '10px',width:'100%',paddingLeft: '10px'}}>{error && error.carbonproject ? "Select Atleast a project before submit !!!" : ""}</span>
            <div className="sidebar__carbon__wrap carbon__wrap2" style={{backgroundImage: `url('/assets/img/carbon_bg.jpg')`}}>
                <div className="sidebar2__carbon__title">
                    <h4>Carbon Thing</h4>
                    <p>Choose the project you’d like to contribute to.</p>
                </div>
                {(ProjectData && ProjectData.length > 0) ? ProjectData.map((data , key)=>{

                 return (
                <div key={key} id={data.project_id} style={(carbonthings.carbonproject.indexOf(data.project_id) > -1) ? {backgroundColor:'#37434A',cursor:'pointer'} : {backgroundColor:'#1F272C',cursor:'pointer'}} onClick={()=>selectCarbon(data.project_id)} className="sidebar2__carbon__single__wrap position-relative">
                    <div className="sidebar2__carbon__img">
                        <img src={data.image.default} alt={data.project_id}/>
                    </div>
                    <div className="sidebar2__carbon__info">
                        <h4>{data.project_heading || ''}</h4>
                        <p>You are generating {(totals.total/1000).toFixed(3)} Tons</p>
                    </div>
                </div>
                 )
                    }):""} 
               
            </div>
         
            <div className="sidebar__main__btn sidebar2">
             {issuccess ? <span style={issuccess ? {color:'green',transition:'0.5s',opacity: "1",fontWeight: '600',fontStyle: 'italic',transitionDelay: '3s'}:{color:'green',transition:'0.5s',opacity: "0",fontWeight: '600',fontStyle: 'italic',transitionDelay: '3s'}}>Your Query is Submitted Successfully, We will get back to you soon.</span>:""}
                <button style={{border:'none',width:'100%'}} onClick={()=>submitDetails()} className="common__btn" disabled ={bloading ? true : false}>{bloading ? <span className="spinner-border" role="status"></span>:'Sumit'}</button>
            </div>
        </div>
    </div>
    <div className="offcanvas-overlay"></div>
    </>
        )

}
export default Sidebar;