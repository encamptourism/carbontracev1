import HtmlHead from '../../components/common/HtmlHead';
import Header from '../../components/common/Header';
import ProjectComponent from '../../components/project/index';
import MainFooter from '../../components/common/MainFooter';
import {ProjectData} from '../../components/project/projectdata';
import Contactus from '../../components/common/Contactus';
import {useState} from "react";

const index=({ProjectDatas})=>{
const [enquiry,setEnquiry] = useState({message:"",firstName:'',lastName:'',contact:'',email:''});
const [error,setError] = useState({message:"",firstName:'',lastName:'',contact:'',email:''});
const [bloading,setBloading] = useState(false);
const [toggle,setToggle] = useState(false);
const [issuccess,setIssuccess] = useState(false);

return (
	 <>
      <HtmlHead/>
      <Header toggle = {toggle} setToggle = {setToggle}/>
      <Contactus issuccess = {issuccess} setIssuccess = {setIssuccess} toggle = {toggle} setToggle = {setToggle} bloading = {bloading} setBloading = {setBloading} enquiry = {enquiry} setEnquiry = {setEnquiry} error = {error} setError = {setError}/>
      <ProjectComponent ProjectData={ProjectDatas}/>
      <MainFooter/>
	</>
	)

}
export default index;

export async function getStaticProps() {
 return { props: { ProjectDatas:ProjectData } }
}