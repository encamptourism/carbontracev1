export const travelQuestion=[
                              {
                              name:"travelmode",
	                            typess:"select",
	                            question:"What was the travel mode you took during the trip?",
	                            option:[{label:'Bike',value:'bike'},{label:'Car',value:'car'},{label:'Bus',value:'bus'},{label:'Train',value:'train'},{label:'Flight',value:'flight'}],
	                            image:"assets/img/questions/question_9.jpg",
	                            default:true,
	                            cf:{bike:0.05,car:0.05,bus:0.05,train:0.05,flight:0.05},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"noofdays",
	                            typess:"text",
	                            question:"How many days was the trip for?",
	                            image:"assets/img/questions/question_10.jpg",
	                            default:false,
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"nooftraveller",
	                            typess:"select",
	                            question:"How many people did you travel with?",
	                            option:[{label:'One',value:'1'},{label:'Two',value:'2'},{label:'Three',value:'3'},{label:'Four or more',value:'4'}],
	                            image:"assets/img/questions/question_11.jpg",
	                            default:false,
	                            cf:{one:0.05,two:0.025,three:0.05,four:0.05},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"kindoftransport",
	                            typess:"select",
	                            question:"What kind of public transport did you take on your last trip?",
	                            option:[{label:'Hired Taxi - OLA/UBER - petrol',value:'hired_taxi_patrol'},{label:'Shared Taxi',value:'shared_taxi'},{label:'Metro',value:'metro'},{label:'Bus',value:'bus'}],
	                            image:"assets/img/questions/question_12.jpg",
	                            default:false,
	                            cf:{hired_taxi_patrol:0.13,shared_taxi:0.04,metro:0.12,bus:0.022},
	                            layout:'col-sm-12 col-md-6'

	                          },
	                          {
	                            name:"kindoftravel",
	                            typess:"select",
	                            question:"What kind of car did you travel in?",
	                            option:[{label:'Diesel',value:'Diesel'},{label:'Petrol',value:'Petrol'},{label:'Hybrid',value:'Hybrid'},{label:'CNG',value:'CNG'}],
	                            image:"assets/img/questions/question_13.jpg",
	                            default:false,
	                            cf:{Diesel:0.13,Petrol:0.15,Hybrid:0.11,CNG:0.11},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"kindofvehicle",
	                            typess:"select",
	                            question:"What kind of car or vehicle was it?",
	                            option:[{label:'4 x 4',value:'fourXfour'},{label:'SUV',value:'SUV'},{label:'Sedan',value:'Sedan'},{label:'Traveler',value:'Traveler'}],
	                            image:"assets/img/questions/question_14.jpg",
	                            default:false,
	                            cf:{fourXfour:0.19,SUV:0.045,Sedan:0.09,Traveler:0.002},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"noofkmtravel",
	                            typess:"slider",
	                            question:"How many KMs did you travel on public transport?",
	                            min:0,
	                            max:250,
	                            image:"assets/img/questions/question_15.jpg",
	                            default:false,
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"kindoffood",
	                            typess:"select",
	                            question:"What kind of food do you prefer on your trips?",
	                            option:[{label:'Vegetarian',value:'Vegetarian'},{label:'Non Vegetarian',value:'Non_Vegetarian'}],
	                            image:"assets/img/questions/question_16.jpg",
	                            default:false,
	                            cf:{Vegetarian:17,Non_Vegetarian:52},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                          {
	                            name:"kindofaccomodation",
	                            typess:"select",
	                            question:"What kind of accommodation did you have on your trip?",
	                            option:[{label:'5 star',value:'five_star'},{label:'4 star',value:'four_star'},{label:'3 star',value:'three_star'},{label:'2 star',value:'two_star'},{label:'Camping',value:'camping'}],
	                            image:"assets/img/questions/question_17.jpg",
	                            default:false,
	                            cf:{five_star:0.19,four_star:0.09,three_star:0.045,two_star:0.002,camping:0.001},
	                            layout:'col-sm-12 col-md-6'
	                          },
	                        ];


