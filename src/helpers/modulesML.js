import { VAppBarNavIcon } from "vuetify/lib";

var modulesML = {

  Test(data) {
    console.log("makeaDecision.Test: "+ data );
    return data;
  },
  runLSTM(data) {
    console.log("makeaDecision.runLSTM: "+ data.split('') );

    const brain = require('brain.js');
    const d3 = require('d3')

    let trainingData = [];

    

   /* const trainingData = [
      "12 Loines Ave, Merrick, NY 11566, USA,2039 Merrick Ave N, Merrick, NY 11566, USA,2039 Merrick Ave, Merrick, NY 11566, USA,11 Loines Ave, Merrick, NY 11566, USA,57-1 Loines Ave, Merrick, NY 11566, USA,Merrick, NY, USA,Merrick, NY 11566, USA,Hempstead, NY, USA,Nassau County, NY, USA,Long Island, New York, USA,New York, USA,United States",
      "44-10 Kissena Blvd, Flushing, NY 11355, EE. UU.,4410 Kissena Blvd, Flushing, NY 11355, EE. UU.,44-9 Kissena Blvd, Flushing, NY 11355, EE. UU.,44-23-44-1 Kissena Blvd, Flushing, NY 11355, EE. UU.,East Flushing, Queens, NY, EE. UU.,Flushing, Nueva York 11355, EE. UU.,Queens, Nueva York, EE. UU.,Queens, Nueva York, EE. UU.,Nueva York, EE. UU.,Long Island, Nueva York, EE. UU.,Nueva York, EE. UU.,Estados Unidos",
      "6852 Fresh Pond Rd, Ridgewood, NY 11385, USA,60-86 Catalpa Ave, Flushing, NY 11385, USA,Fresh Pond Rd/Catalpa Av, Queens, NY 11385, USA,60-85 Catalpa Ave, Ridgewood, NY 11385, USA,60-99-60-49 Catalpa Ave, Ridgewood, NY 11385, USA,Ridgewood, Queens, NY, USA,Glendale, NY 11385, USA,Queens, NY, USA,Queens County, Queens, NY, USA,New York, NY, USA,Long Island, New York, USA,New York, USA,United States",
      "49 Communipaw Ave, Jersey City, NJ 07304, USA,508 Bergen Ave, Jersey City, NJ 07304, USA,512 Bergen Ave, Jersey City, NJ 07304, USA,Communipaw Ave at Bergen Ave, Jersey City, NJ 07304, USA,108 Sackett St, Jersey City, NJ 07304, USA,111-89 Sackett St, Jersey City, NJ 07304, USA,Jersey City, NJ 07304, USA,West Side, Jersey City, NJ, USA,Jersey City, NJ, USA,Hudson County, NJ, USA,New Jersey, USA,United States",
      "20 Shamokin Ln, East Islip, NY 11730, USA,12 Shamokin Ln, East Islip, NY 11730, USA,19 Shamokin Ln, East Islip, NY 11730, USA,2-26 Shamokin Ln, East Islip, NY 11730, USA,East Islip, NY 11730, USA,East Islip, NY, USA,Islip, NY, USA,Long Island, New York, USA,Suffolk County, NY, USA,New York, USA,United State",
      "199 Amsterdam Ave, New York, NY 10023, USA,199 Amsterdam Ave, New York, NY 10023, USA,187 W 69th St, New York, NY 10023, USA,198-174 W 69th St, New York, NY 10023, USA,Lincoln Square, New York, NY, USA,New York, NY 10023, USA,Manhattan, New York, NY, USA,New York County, New York, NY, USA,New York, NY, USA,New York, USA,United State",
      "100 White Pine Dr, Albany, NY 12203, USA,100 White Pine Dr, Albany, NY 12203, USA,100 White Pine Dr, Albany, NY 12203, USA,100-198 White Pine Dr, Albany, NY 12203, USA,Dunes, Albany, NY, USA,STUYVSNT PLZ, NY 12203, USA,Albany, NY, USA,Albany County, NY, USA,New York, USA,United States"
    ]

    const trainingData =[
      ",NY,Suffolk,Islip,East Islip,,East Islip,11730,,,,,,,,Shamokin,Lane,,,,1,,,,,,,,,,-73.182316171646150,40.727967291166841,18TXL5350010148,{B2CEE556-F0E4-4459-AD11-A955AD5E512E},Unknown,Structure - Rooftop,New York State GIS Program Office,911 Addressing Authority,,7/23/2018 20:07:26,,,3771041",  
      ",NY,Suffolk,Islip,East Islip,,East Islip,11730,,,,,,,,Shamokin,Lane,,,,5,,,,,,,,,,-73.182021669760033,40.728036799889779,18TXL5352510156,{04AD0628-0197-42EA-A960-BE4ACD4D14CE},Unknown,Structure - Rooftop,New York State GIS Program Office,911 Addressing Authority,,7/23/2018 20:07:26,,,3771042",
      ",NY,Suffolk,Islip,East Islip,,East Islip,11730,,,,,,,,Shamokin,Lane,,,,6,,,,,,,,,,-73.181755839402840,40.727579985231934,18TXL5354810106,{711ED367-3C05-423B-9731-FC0960486027},Unknown,Structure - Rooftop,New York State GIS Program Office,911 Addressing Authority,,7/23/2018 20:07:26,,,3771043",
      ",NY,Suffolk,Islip,East Islip,,East Islip,11730,,,,,,,,Shamokin,Lane,,,,12,,,,,,,,,,-73.181104140410326,40.727507921811558,18TXL5360410099,{09325886-8E4F-423F-9783-E605401709A4},Unknown,Structure - Rooftop,New York State GIS Program Office,911 Addressing Authority,,7/23/2018 20:07:26,,,3771044",
      ",NY,Suffolk,Islip,East Islip,,East Islip,11730,,,,,,,,Shamokin,Lane,,,,20,,,,,,,,,,-73.181243394550705,40.728252197161567,18TXL5359010182,{840B9CF3-7FAF-45C0-8CA6-FF1D0D6A05AB},Unknown,Structure - Rooftop,New York State GIS Program Office,911 Addressing Authority,,7/23/2018 20:07:26,,,3771058"
    ]
*/

function processData (training) {
  console.log("processData: ", training);

//Start LSTM from here...
  const network = new brain.recurrent.LSTM();

    network.train(trainingData , {
      iterations: 1000,
      log: stats => {
        console.log(stats)
      }
    })
     alert("WE have been trained")

    const queryString = data; //data[0];

    alert("QueryString: " + queryString );

    console.log("Results: ", queryString + network.run(queryString ));

   // return data;
};


const testData = 'top10.txt'; //'/Users/cooper/Documents/Data/NAD_r3_revised_ASCII/top10.txt'
d3.csv(testData)
.then(function(data) {
    // data is now whole data set
    console.log("Ouila mon ami: ", data );
    
    let output = data.map( row =>{
      let rowOut = []
      let keys = Object.keys(row)
      for(var i in keys){
        
        let k = keys[i]
        let value = row[k]
  /*    if(value != ""){
          rowOut.push(value)
        }*/
        rowOut.push(value);
      }
      return rowOut.join(',')
    })
    console.log("output>",output);
    trainingData = output;
    processData(trainingData)
})
.catch(function(error){
  // handle error 
  console.log('ERROR: ', error )  
})

  //  return data;
},//end decsisionTree
  defaultFunc (data) {
    console.log("makeaDecision.LSTM: "+ data );
    
    const brain = require('brain.js');

    const trainingData = [
      [10,9,8,7,6,5,4,3,2,1]
    ]
    const network = new brain.recurrent.LSTM();

    network.train(trainingData , {
      log: stats => {
        console.log(stats)
      }
    })
    alert("Hello, Dave...")
    console.log(network.run([10,9,8]))
    
    return data; 
  },
  neuralNet(data) {
    console.log("makeaDecision.neuralNet: "+ data );
    return data;
  },
  //cooper s - within7dys is the "Boucher" check

}//end modulesML

export default modulesML