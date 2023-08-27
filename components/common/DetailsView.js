import {useEffect} from "react";
const DetailsView=({detailview,totals,whichcalculator})=>{


useEffect(()=>{
window.scrollTo(0, 0);

},[]);

let total = totals && totals.total ? +(totals.total/1000).toFixed(3) : 0;
const lang = {
              howmanyflightayear:'Flights',
              howmanykmtrainayear:'Train',
              howmuchmeateatperday:'NonVeg Consuption',
              howmuchelectricity:'Electricity Consumption',
              publictransport:'Public Transport',
              localtransport:'Local Transport',
              totalaccomdation:'Accomodation',
              totalfood:'Food',
              totaltravel:'Travel'

            }
 const tipsToReduceCarbonFootprint = [
  "Reduce, Reuse, Recycle: Always follow the three R's. Start by reducing waste, then find ways to reuse items, and finally, recycle whatever you can.",
  "Drive Less: Walk, bike, carpool, or use public transportation whenever possible.",
  "Energy-efficient Appliances: Opt for appliances that have a good energy efficiency rating.",
  "Limit Air Travel: Consider taking trains or buses for shorter trips.",
  "Eat Local and Seasonal: Consuming locally-grown food reduces the carbon footprint associated with transporting food items.",
  "Reduce Meat Consumption: Especially beef, as livestock farming has a significant carbon footprint.",
  "Plant Trees: Trees absorb carbon dioxide and provide oxygen, making them natural carbon sinks.",
  "Switch to Renewable Energy: Consider using solar panels or wind turbines for your energy needs.",
  "Use LED Bulbs: They use less energy and last longer than traditional bulbs.",
  "Install a Smart Thermostat: This helps in regulating home temperature efficiently, saving energy.",
  "Water Conservation: Fix leaks, and use water-saving fixtures and appliances.",
  "Unplug Electronics: Devices consume energy even when they're off but still plugged in.",
  "Reduce Consumption of Processed and Packaged Foods: These have a higher carbon footprint due to production and packaging processes.",
  "Home Insulation: Proper insulation reduces the need for heating and cooling, which saves energy.",
  "Support and Buy from Companies with Green Initiatives: Your consumer choices can promote sustainable business practices.",
  "Use Cloth Bags: Reduce the usage of plastic bags which are harmful to the environment.",
  "Limit Use of Space Heaters: They consume a significant amount of electricity.",
  "Compost: Instead of sending organic waste to landfills where it produces methane, compost it.",
  "Educate and Advocate: Share your knowledge about reducing carbon footprint with friends, family, and community.",
  "Stay Informed: Regularly update your knowledge about the environment and climate change to adopt newer, more effective strategies for reducing your carbon footprint."
];

function getRandomTips(tipsArray, numberOfTips) {
  if (numberOfTips <= 0 || numberOfTips > tipsArray.length) {
    return "Invalid number of tips requested.";
  }

  const shuffledTips = tipsArray.slice().sort(() => Math.random() - 0.5);
  const selectedTips = shuffledTips.slice(0, numberOfTips);

  return selectedTips;
}


const getLanguage=(val)=>{
if(lang[val]){
	return lang[val];
}
}
const randTips = getRandomTips(tipsToReduceCarbonFootprint,3);

return (
		     <section className="result__area mt-8">
					  <div className="container mx-auto bg-white rounded-xl p-8 shadow-md max-w-4xl">
					    <div className="text-center mb-8">
					      <h2 className="text-3xl font-bold text-gray-700 mb-2">Your Annual Carbon Footprint</h2>
					      <span className="text-blue-600 text-4xl font-bold">{total} Tonnes CO2</span>
					    </div>
					      <div className="grid grid-cols-2 gap-6 mb-6 p-5 mx-auto">
					       { detailview && detailview.length > 0 ? detailview.map((view,key)=>{
                              return(					 
					        <div key={key}>
					             <p className="text-gray-600 mb-1">{getLanguage(view[0])}</p>
					             <span className="text-blue-500 text-xl">{view[1].toFixed(3)} Tonnes</span>
					           </div>
					           )}):''
					           }
					       </div>
					    <div className="mb-8 p-6 bg-blue-50 rounded-lg">
					      <h3 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">Tips to Reduce Carbon Footprint:</h3>
					      <ul className="list-disc pl-5 mt-4">
					      {randTips && randTips.length > 0 ? randTips.map((tip,key)=>{
                               return (
                                        <li key={key} className="mb-2 text-gray-600">{tip}</li>
                                      )
					      }):''
					       
					      }  
					      </ul>
					    </div>

					  </div>
	</section>

	   )

}
export default DetailsView;