import{useState} from "react";
import adminapi from "../../api/adminapi";
const Contactus=(props)=>{

const {issuccess,setIssuccess,toggle,setToggle,bloading,setBloading,enquiry,setEnquiry,error,setError} = props;


const onChangeHandler=(e)=>{
setEnquiry({...enquiry,[e.target.name]:e.target.value})

}
const validateEmail=(emails)=>{
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(emails.match(validRegex)){
    return true;
}else{
    return false;
}


}


const submitDetails= async()=>{
//setBloading(true);
let acterror = {...error};
if(enquiry.firstName === ""){
acterror = {...acterror,firstName:'FirstName Required'};
}else{
 acterror = {...acterror,firstName:''};   
}
if(enquiry.lastName === ""){
acterror = {...acterror,lastName:'LastName Required'};
}else{
 acterror = {...acterror,lastName:''};   
}
if(enquiry.contact === "" || enquiry.contact.length < 10 || enquiry.contact.length > 13 ){
acterror = {...acterror,contact:'Mobile Number Required'};
}else{
 acterror = {...acterror,contact:''};   
}
if(enquiry.email === "" || !validateEmail(enquiry.email)){
acterror = {...acterror,email:'Email Required'};
}else{
 acterror = {...acterror,email:''};   
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
const path = "/addinquiry";
let newfullname = `${enquiry.firstName} ${enquiry.lastName}` || "";
let submissiondata = {
                      name:newfullname,
                      email:enquiry.email || "",
                      phone:enquiry.contact || "",
                      message:enquiry.message || '',
                      tag:'carbonfootprintenquiry',
                      info:{name:newfullname,email:enquiry.email || "",phone:enquiry.contact || "", message:enquiry.message || ''}
                      }
try{
const localresponse = await adminapi.post(path,JSON.stringify(submissiondata));
if(localresponse.data.inquiry._id !== undefined){
setIssuccess(true);
setEnquiry({message:"",firstName:'',lastName:'',contact:'',email:''});
setBloading(false);
setTimeout(()=>{setToggle(false);setIssuccess(false);},5000);
    }else{
setIssuccess(false);
setBloading(false);
    }
}catch(error){
    setIssuccess(false);
     setBloading(false);
    alert("Check console for error log");
    console.log(error);
   }

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
                        <input  name="firstName" className={error && error.firstName ? "error" : "dff"} id="firstName" type="text" onChange={(e)=>onChangeHandler(e)} value={enquiry.firstName}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Last Name</label>
                        <input className={error && error.lastName ? "error" : "dff"} type="text" name="lastName" id="lastName" onChange={(e)=>onChangeHandler(e)} value={enquiry.lastName}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Contact</label>
                        <input type="text" className={error && error.contact ? "error" : "dff"} placeholder="+91" name="contact" id="contact" onChange={(e)=>onChangeHandler(e)} value={enquiry.contact}/>
                    </div>
                    <div className="sidebar__form__single">
                        <label htmlFor="">Email</label>
                        <input type="email" className={error && error.email ? "error" : "dff"} placeholder="your@domain.com" name="email" id="email" onChange={(e)=>onChangeHandler(e)} value={enquiry.email}/>
                    </div>
                     <div className="sidebar__form__double">
                        <label htmlFor="">Your Message</label>
                        <textarea rows={10} className={error && error.message ? "error" : "dff"} placeholder="Enter your Message here" name="message" id="message" onChange={(e)=>onChangeHandler(e)} value={enquiry.message}/>
                    </div>
                </div>
            </form>
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
export default Contactus;