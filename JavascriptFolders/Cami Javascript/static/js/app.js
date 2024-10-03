// // Build the metadata panel
// function buildMetadata(sample) {
// d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

// // get the metadata field
//   let metadata = data.metadata;

// // Filter the metadata for the object with the desired sample number
//   let resultArray = metadata.filter(sampleDictionary => sampleDictionary.id == sample);

// // Use d3 to select the panel with id of `#sample-metadata`
// let result = resultArray[0];

// let PANEL = d3.select("#sample-metadata");

//  // Use `.html("") to clear any existing metadata
// PANEL.html("");

// // Inside a loop, you will need to use d3 to append new
// // tags for each key-value in the filtered metadata.
// for(key in result) {
//     PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
// }

// });
// }


console.log(data);

// Initialized arrays
let activityArray = ["Screen Time", "Physical Activity", "Sleep"]
let genders = ["Female", "Male", "Other"];
let screenTimeArray = []
let physicalActivityArray = []
let sleepArray = []
let genderArray = []
let averagesArray = []
let femaleMetricAveragesArray = []
let maleMetricAveragesArray = []
let otherMetricAveragesArray = []


// For loop to populate arrays
for (let i = 0; i < data.length; i++) {
  row = data[i];
  screenTimeArray.push(row.Screen_Time_Hours);
  physicalActivityArray.push(row.Physical_Activity_Hours);
  sleepArray.push(row.Sleep_Hours);
  genderArray.push(row.Gender);
}

function calculateScreenTimeAvg(screenTimeArray) {
  let sum = 0;
  for (let i = 0; i < screenTimeArray.length; i++) {
    sum += screenTimeArray[i];
  }
  let meanScreenTimeValue = sum / screenTimeArray.length;

  averagesArray.push(meanScreenTimeValue);
}

function calculatePhysicalActivityAvg(physicalActivityArray) {
  let sum = 0;
  for (let i = 0; i < physicalActivityArray.length; i++) {
    sum += physicalActivityArray[i];
  }
  let meanPhysicalActivityValue = sum / physicalActivityArray.length;

  averagesArray.push(meanPhysicalActivityValue);
}

function calculateSleepAvg(sleepArray) {
  let sum = 0;
  for (let i = 0; i < sleepArray.length; i++) {
    sum += sleepArray[i];
  }
  let meanSleepValue = sum / sleepArray.length;

  averagesArray.push(meanSleepValue);
}

calculateScreenTimeAvg(screenTimeArray);

calculatePhysicalActivityAvg(physicalActivityArray);

calculateSleepAvg(sleepArray);


function calculateFemaleMetricAvg(data) {

      // Initialize variables to increment
      let count = 0;
      let total = 0;
  
      // Loop through the array of data
      for (let j = 0; j < data.length; j++) {
        // Store the data at index `j` for evaluation
        row = data[j];
  
        // Compare `gender` value to `gender` provided as argument
        if (row.Gender == "Female"){
  
          // Increment by `metric` argument value
          total += row["Screen_Time_Hours"];
          // Increment by one
          count += 1;
        }
      }
      // Calculate the average value
      let meanFemaleScreenTimeValue = total / count;
  
      // Append the average value to the  `metricArray`
      femaleMetricAveragesArray.push(meanFemaleScreenTimeValue);
    
      // Initialize variables to increment
      let count2 = 0;
      let total2 = 0;

      // Loop through the array of data
      for (let j = 0; j < data.length; j++) {
        // Store the data at index `j` for evaluation
        row = data[j];

        // Compare `gender` value to `gender` provided as argument
        if (row.Gender == "Female"){

        // Increment by `metric` argument value
        total2 += row["Physical_Activity_Hours"];
        // Increment by one
        count2 += 1;
      }
    }
    // Calculate the average value
    let meanFemalePhysicalActivityValue = total2 / count2;

    // Append the average value to the  `metricArray`
    femaleMetricAveragesArray.push(meanFemalePhysicalActivityValue);

      // Initialize variables to increment
      let count3 = 0;
      let total3 = 0;

     // Loop through the array of data
      for (let j = 0; j < data.length; j++) {
       // Store the data at index `j` for evaluation
       row = data[j];

       // Compare `gender` value to `gender` provided as argument
       if (row.Gender == "Female"){

       // Increment by `metric` argument value
       total3 += row["Sleep_Hours"];
       // Increment by one
       count3 += 1;
     }
   }
   // Calculate the average value
   let meanFemaleSleepValue = total3 / count3;

   // Append the average value to the  `metricArray`
   femaleMetricAveragesArray.push(meanFemaleSleepValue);

}

calculateFemaleMetricAvg(data);


function calculateMaleMetricAvg(data) {

  // Initialize variables to increment
  let count = 0;
  let total = 0;

  // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
    // Store the data at index `j` for evaluation
    row = data[j];

    // Compare `gender` value to `gender` provided as argument
    if (row.Gender == "Male"){

      // Increment by `metric` argument value
      total += row["Screen_Time_Hours"];
      // Increment by one
      count += 1;
    }
  }
  // Calculate the average value
  let meanMaleScreenTimeValue = total / count;

  // Append the average value to the  `metricArray`
  maleMetricAveragesArray.push(meanMaleScreenTimeValue);

  // Initialize variables to increment
  let count2 = 0;
  let total2 = 0;

  // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
    // Store the data at index `j` for evaluation
    row = data[j];

    // Compare `gender` value to `gender` provided as argument
    if (row.Gender == "Male"){

    // Increment by `metric` argument value
    total2 += row["Physical_Activity_Hours"];
    // Increment by one
    count2 += 1;
  }
}
// Calculate the average value
let meanMalePhysicalActivityValue = total2 / count2;

// Append the average value to the  `metricArray`
maleMetricAveragesArray.push(meanMalePhysicalActivityValue);

  // Initialize variables to increment
  let count3 = 0;
  let total3 = 0;

 // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
   // Store the data at index `j` for evaluation
   row = data[j];

   // Compare `gender` value to `gender` provided as argument
   if (row.Gender == "Male"){

   // Increment by `metric` argument value
   total3 += row["Sleep_Hours"];
   // Increment by one
   count3 += 1;
 }
}
// Calculate the average value
let meanMaleSleepValue = total3 / count3;

// Append the average value to the  `metricArray`
maleMetricAveragesArray.push(meanMaleSleepValue);

}

calculateMaleMetricAvg(data);


function calculateOtherMetricAvg(data) {

  // Initialize variables to increment
  let count = 0;
  let total = 0;

  // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
    // Store the data at index `j` for evaluation
    row = data[j];

    // Compare `gender` value to `gender` provided as argument
    if (row.Gender == "Other"){

      // Increment by `metric` argument value
      total += row["Screen_Time_Hours"];
      // Increment by one
      count += 1;
    }
  }
  // Calculate the average value
  let meanOtherScreenTimeValue = total / count;

  // Append the average value to the  `metricArray`
  otherMetricAveragesArray.push(meanOtherScreenTimeValue);

  // Initialize variables to increment
  let count2 = 0;
  let total2 = 0;

  // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
    // Store the data at index `j` for evaluation
    row = data[j];

    // Compare `gender` value to `gender` provided as argument
    if (row.Gender == "Other"){

    // Increment by `metric` argument value
    total2 += row["Physical_Activity_Hours"];
    // Increment by one
    count2 += 1;
  }
}
// Calculate the average value
let meanOtherPhysicalActivityValue = total2 / count2;

// Append the average value to the  `metricArray`
otherMetricAveragesArray.push(meanOtherPhysicalActivityValue);

  // Initialize variables to increment
  let count3 = 0;
  let total3 = 0;

 // Loop through the array of data
  for (let j = 0; j < data.length; j++) {
   // Store the data at index `j` for evaluation
   row = data[j];

   // Compare `gender` value to `gender` provided as argument
   if (row.Gender == "Other"){

   // Increment by `metric` argument value
   total3 += row["Sleep_Hours"];
   // Increment by one
   count3 += 1;
 }
}
// Calculate the average value
let meanOtherSleepValue = total3 / count3;

// Append the average value to the  `metricArray`
otherMetricAveragesArray.push(meanOtherSleepValue);

}

calculateOtherMetricAvg(data);


console.log(otherMetricAveragesArray);



// Trace1 for the Overall Data
// let trace1 = {
//   x: activityArray,
//   y: averagesArray,
//   name: "All",
//   type: "bar"
// };

let trace2 = {
  x: activityArray,
  y: femaleMetricAveragesArray,
  name: "Female",
  type: "bar"
};

let trace3 = {
  x: activityArray,
  y: maleMetricAveragesArray,
  name: "Male",
  type: "bar"
};

let trace4 = {
  x: activityArray,
  y: otherMetricAveragesArray,
  name: "Other",
  type: "bar"
};

// Create data array
let graphData = [trace2, trace3, trace4];

// Apply a title to the layout
let layout = {
  title: "Average Hours",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", graphData, layout);




// function calculateGenderPhysicalActivityAvg(data, genders, physicalActivityArray) {

//   // Loop through the array of genders
//     for (let i =0; i < genders.length; i++) {
//       // Store the gender at index `i` for evaluation
//       gender = genders[i];

//       // Initialize variables to increment
//       let count = 0;
//       let total = 0;
  
//       // Loop through the array of data
//       for (let j = 0; j < data.length; j++) {
//         // Store the data at index `j` for evaluation
//         row = data[j];
  
//         // Compare `gender` value to `gender` provided as argument
//         if (row.Gender == gender){
  
//           // Increment by `metric` argument value
//           total += row["Physical_Activity_Hours"];
//           // Increment by one
//           count += 1;
//         }
//       }
//       // Calculate the average value
//       let meanGenderPhysicalActivityValue = total / count;
  
//       // Append the average value to the  `metricArray`
//       genderAveragesPhysicalActivityArray.push(meanGenderPhysicalActivityValue);
//     }
// }

// function calculateGenderSleepAvg(data, genders, sleepArray) {

//   // Loop through the array of genders
//     for (let i =0; i < genders.length; i++) {
//       // Store the gender at index `i` for evaluation
//       gender = genders[i];

//       // Initialize variables to increment
//       let count = 0;
//       let total = 0;
  
//       // Loop through the array of data
//       for (let j = 0; j < data.length; j++) {
//         // Store the data at index `j` for evaluation
//         row = data[j];
  
//         // Compare `gender` value to `gender` provided as argument
//         if (row.Gender == gender){
  
//           // Increment by `metric` argument value
//           total += row["Sleep_Hours"];
//           // Increment by one
//           count += 1;
//         }
//       }
//       // Calculate the average value
//       let meanGenderSleepValue = total / count;
  
//       // Append the average value to the  `metricArray`
//       genderAveragesSleepArray.push(meanGenderSleepValue);
//     }
// }

// calculateGenderPhysicalActivityAvg(data, genders, physicalActivityArray);

// calculateGenderSleepAvg(data, genders, sleepArray);

//SECOND ATTEMPT

// let genders = ["Female", "Male", "Other"];

// // Metric variable for function inputs
// let metric = "Screen_Time_Hours";
// // let metric = "Physical_Activity_Hours";
// // let metric = "Sleep_Hours";

// // Function to calculate and plot the average of a metric by gender
// function plotMetric(data, genders, metric) {
//     // Initialize an array to hold metric averages
//     let metricArray = [];
  
//     // Loop through the array of genders
//     for (let i =0; i < genders.length; i++) {
//       // Store the gender at index `i` for evaluation
//       gender = genders[i];
  
//       // Initialize variables to increment
//       let count = 0;
//       let total = 0;
  
//       // Loop through the array of data
//       for (let j = 0; j < data.length; j++) {
//         // Store the data at index `j` for evaluation
//         row = data[j];
  
//         // Compare `gender` value to `gender` provided as argument
//         if (row.Gender == gender){
  
//           // Increment by `metric` argument value
//           total += row[metric];
//           // Increment by one
//           count += 1;
//         }
//       }
//       // Calculate the average value
//       let meanValue = total / count;
  
//       // Append the average value to the  `metricArray`
//       metricArray.push(meanValue);
//     }
    
//     // Assign `genders` array argument to `x`
//     // Assign the `metricArray` with averages for each gender to `y`
//     let trace1 = {
//       x: genders,
//       y: metricArray,
//       type: "bar"
//     }
  
//     let graphdata = [trace1];
  
//     // Pass metric to chart title
//     let layout = {
//       title: `Average ${metric}`
//     };
  
//     Plotly.newPlot("bar", graphdata, layout);
//   }

// // Invoke the plotting function
// plotMetric(data, genders, metric);


//FIRST ATTEMPT

// gender = data.map(function (row){
//     return row.Gender
//   });

// let trace1 = {
//     x: data.map(row => row.Gender),
//     y: data.map(row => row.Screen_Time_Hours),
//     type: "bar"
//   };

// // Data trace array
// let traceData = [trace1];

// // Apply the group barmode to the layout
// let layout = {
//   title: "Screen Time Hours by Gender"
// };

// Render the plot to the div tag with id "plot"
// Plotly.newPlot("bar", traceData, layout);


// // function to build both charts
// function buildCharts(data) {
