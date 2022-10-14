import HtmlHead from '../../components/common/HtmlHead';
import Header from '../../components/common/Header';
import ProjectComponent from '../../components/project/index';
import MainFooter from '../../components/common/MainFooter';
import {ProjectData} from '../../components/project/projectdata';
const Index=({ProjectDatas})=>{
return (
	 <>
      <HtmlHead/>
      <Header/>
      <ProjectComponent ProjectData={ProjectDatas}/>
      <MainFooter/>
	</>
	)

}
export default Index;

export async function getStaticProps() {
 return { props: { ProjectDatas:ProjectData } }
}