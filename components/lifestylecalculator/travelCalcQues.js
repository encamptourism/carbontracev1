export const lifestyleQuestion=[
                              {
                              name:"howmuchelectricity",
	                            typess:"selectandtext",
	                            question:"How much electricity does your household consume (enter annual amount in kWh based on your bills)?",
	                            option:[{label:'100 KWh',value:'100'},{label:'200 KWh',value:'200'},{label:'300 KWh',value:'300'},{label:'400 KWh',value:'400'}],
	                            image:"assets/img/questions/question_1.jpg",
	                            default:true,
	                            layout:'col-sm-12 col-md-12'
	                          },
	                          {
	                            name:"howmanypeopleinhouse",
	                            typess:"select",
	                            question:"How many people are there in your household aged 16+?",
	                            option:[{label:'One',value:'1'},{label:'Two',value:'2'},{label:'Three',value:'3'},{label:'Four and More',value:'4'}],
	                            image:"assets/img/questions/question_2.jpg",
	                            default:false,
	                            multiplyingfact:52,
	                            layout:'col-sm-12 col-md-12'
	                          },
	                          {
	                            name:"howmuchmeateatperday",
	                            typess:"select",
	                            question:"How much meat do you eat per day?",
	                            option:[{label:'High Meat Eater (> 100g of meat)',value:'g100'},{label:'Medium Meat Eater (= 50 to 100g of meat)',value:'to50to100'},{label:'Low Meat Eater (< 50g of meat)',value:'l50'}],
	                            image:"assets/img/questions/question_3.jpg",
	                            default:false,
	                            cf:{g100:0.05,to50to100:0.025,l50:0.05},
	                            layout:'col-sm-12 col-md-12'
	                          },
	                          {
	                            name:"kindoftravelmode",
	                            typess:"select",
	                            question:"What is your preferred mode of daily commute?",
	                            option:[{label:'An SUV',value:'SUV'},{label:'Petrol Car',value:'patrol_car'},{label:'Diesel Car',value:'diesel_car'},{label:'Hybrid Car',value:'hybrid_car'},{label:'Bus',value:'bus'},{label:'Train',value:'train'}],
	                            image:"assets/img/questions/question_4.jpg",
	                            default:false,
	                            cf:{patrol_car:17,diesel_car:52,hybrid_car:52,bus:0.022,train:0.012},
	                            layout:'col-sm-12 col-md-6'

	                          },
	                          {
	                            name:"noofkmtravel",
	                            typess:"slider",
	                            question:"On an average how many KMs do you travel daily?",
	                            min:0,
	                            max:250,
	                            image:"assets/img/questions/question_5.jpg",
	                            default:false,
	                            multiplyingfact:0.12,
	                            layout:'col-sm-12 col-md-12'
	                          },
	                          {
	                            name:"howmanyflightayear",
	                            typess:"select-option",
	                            question:"How many flights (round trip) do you take in a year around the range mentioned below?",
	                            option:[{Kilometers:[{label:'Less than 3000 KMs',value:'less3000'},{label:'Less than 6000 KMs',value:'less6000'},{label:'Less than 12000 KMs',value:'less12000'},{label:'Greater than 12000 KMs',value:'greater12000'}]},{Hours:[{label:'Less than 100 Hours',value:'less100'},{label:'Less than 200 Hours',value:'less200'},{label:'Less than 400 Hours',value:'less400'},{label:'Greater than 400 Hours',value:'greater400'}]}],
	                            image:"assets/img/questions/question_6.jpg",
	                            default:false,
	                            cf:{Kilometers:{less3000:0.05,less6000:0.1,less12000:1,greater12000:2},Hours:{less100:0.05,less200:0.2,less400:0.03,greater400:0.1}},
	                            layout:'col-sm-12 col-md-12'
	                          },
	                          {
	                            name:"howmanykmtrainayear",
	                            typess:"select",
	                            question:"How many KMs do you travel in Trains in a year?",
	                            option:[{label:'500 KMs',value:'km500'},{label:'1000 KMs',value:'km1000'},{label:'2000 KMs',value:'km2000'},{label:'3000 KMs',value:'km3000'}],
	                            image:"assets/img/questions/question_7.jpg",
	                            default:false,
	                            cf:{km500:0.22,km1000:0.19,km2000:0.09,km3000:0.045},
	                            layout:'col-sm-12 col-md-12'
	                          },
	                           {
	                            name:"renewableenergy",
	                            typess:"select",
	                            question:"Do you use any renewable energy sources?",
	                            option:[{label:'Yes',value:'yes'},{label:'No',value:'no'}],
	                            image:"assets/img/questions/question_8.jpg",
	                            default:false,
	                            cf:{yes:0.22,no:0.5},
	                            layout:'col-sm-12 col-md-12'
	                          },

	                        ];


