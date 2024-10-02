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

let genders = ["Female", "Male", "Other"];

// Metric variable for function inputs
// let metric = "Screen_Time_Hours";
// let metric = "Physical_Activity_Hours";
let metric = "Sleep_Hours";

// Function to calculate and plot the average of a metric by gender
function plotMetric(films, genders, metric) {
    // Initialize an array to hold metric averages
    let metricArray = [];
  
    // Loop through the array of genders
    for (let i =0; i < genders.length; i++) {
      // Store the gender at index `i` for evaluation
      gender = genders[i];
  
      // Initialize variables to increment
      let count = 0;
      let total = 0;
  
      // Loop through the array of data
      for (let j = 0; j < data.length; j++) {
        // Store the data at index `j` for evaluation
        row = data[j];
  
        // Compare `gender` value to `gender` provided as argument
        if (row.Gender == gender){
  
          // Increment by `metric` argument value
          total += row[metric];
          // Increment by one
          count += 1;
        }
      }
      // Calculate the average value
      let meanValue = total / count;
  
      // Append the average value to the  `metricArray`
      metricArray.push(meanValue);
    }
    
    // Assign `genders` array argument to `x`
    // Assign the `metricArray` with averages for each gender to `y`
    let trace1 = {
      x: genders,
      y: metricArray,
      type: "bar"
    }
  
    let graphdata = [trace1];
  
    // Pass metric to chart title
    let layout = {
      title: `Average ${metric}`
    };
  
    Plotly.newPlot("bar", graphdata, layout);
  }

// Invoke the plotting function
plotMetric(data, genders, metric);



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



//   // Get the samples field
//   let samples = data.samples;

//    // Filter the samples for the object with the desired sample number
//   let resultArray = samples.filter((sampleDictionary) => sampleDictionary.id == sample);
//   let result = resultArray[0];

//   // Get the otu_ids, otu_labels, and sample_values
//   let otuIDs = result.otu_ids;
//   let otuLabels = result.otu_labels;
//   let sampleValues = result.sample_values;


//   // For the Bar Chart, map the otu_ids to a list of strings for your yticks
//   let yticks = otuIDs.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

//   // Build a Bar Chart
//   // Don't forget to slice and reverse the input data appropriately
//   let barData = [
//     {
//       y: yticks,
//       x: sampleValues.slice(0,10).reverse(),
//       text: otuLabels.slice(0,10).reverse(),
//       type: "bar",
//       orientation: "h"
//     }
//   ]

//   let barLayout = {
//     title: "Top 10 Bacteria Cultures Found",
//     margin: { t: 30, l: 150}
//   }

//   // Render the Bar Chart
//   Plotly.newPlot("bar", barData, barLayout);

// });
// }

// // Function to run on page load
// function init() {
//   let selector = d3.select("#selDataset");

//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field
//       let sampleNames = data.names;

//     // Use d3 to select the dropdown with id of `#selDataset`
//     for(let i = 0; i < sampleNames.length; i++){
//       selector.append("option").text(sampleNames[i]).property("value", sampleNames[i]);
//     }

//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.
  
//     // Get the first sample from the list
//     let firstSample = sampleNames[0];

//     // Build charts and metadata panel with the first sample
//     buildMetadata(firstSample);
//     buildCharts(firstSample);

//   });

// }

// // Function for event listener
// function optionChanged(newSample) {

//   // Build charts and metadata panel each time a new sample is selected
//   buildMetadata(newSample);
//   buildCharts(newSample);
// }

// // Initialize the dashboard
// init();