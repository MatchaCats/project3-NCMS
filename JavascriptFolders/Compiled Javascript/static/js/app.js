

// Function to calculate average stress number for a gender category within a specific age range
const calculateAverageStress = (gender, ageRange) => {
  const [minAge, maxAge] = ageRange === '50+' ? [50, Infinity] : ageRange.split('-').map(Number);
  const filteredData = data.filter(d => d.Gender === gender && d.Age >= minAge && d.Age <= maxAge);
  // console.log(`Filtered data for ${gender} in age range ${ageRange}:`, filteredData);

  if (filteredData.length === 0) {
      console.warn(`No data found for ${gender} in age range ${ageRange}. Defaulting to 1.`);
      return 1; // Default value if no data is found
  }

  const totalStress = filteredData.reduce((sum, d) => {
      if (typeof d.Stress_Numbers === 'number') {
          return sum + d.Stress_Numbers; // Ensure it's a number before adding
      }
      console.warn(`Non-numeric value found for ${gender}:`, d.Stress_Numbers);
      return sum; // Continue summing without this entry
  }, 0);

  const average = (totalStress / filteredData.length).toFixed(2); // Calculate the average and round to 2 decimal places
  // console.log(`Average stress level for ${gender} in age range ${ageRange}: ${average}`);
  return parseFloat(average); // Convert back to a number
  
};

// Function to calculate average screen time for a gender category within a specific age range
const calculateAverageScreenTime = (gender, ageRange) => {
  const [minAge, maxAge] = ageRange === '50+' ? [50, Infinity] : ageRange.split('-').map(Number);
  const filteredData = data.filter(d => d.Gender === gender && d.Age >= minAge && d.Age <= maxAge);
  // console.log(`Filtered data for ${gender} in age range ${ageRange}:`, filteredData);

  if (filteredData.length === 0) {
      console.warn(`No data found for ${gender} in age range ${ageRange}. Defaulting to 1.`);
      return 1; // Default value if no data is found
  }

  const totalScreenTime = filteredData.reduce((sum, d) => {
      if (typeof d.Screen_Time_Hours === 'number') {
          return sum + d.Screen_Time_Hours; // Ensure it's a number before adding
      }
      console.warn(`Non-numeric value found for ${gender}:`, d.Screen_Time_Hours);
      return sum; // Continue summing without this entry
  }, 0);

  const averageScreenTime = (totalScreenTime / filteredData.length).toFixed(2); // Calculate the average and round to 2 decimal places
  // console.log(`Average screen time for ${gender} in age range ${ageRange}: ${averageScreenTime}`);
  return parseFloat(averageScreenTime); // Convert back to a number
  
};

// Function to calculate average physical activity for a gender category within a specific age range
const calculateAveragePhysicalActivity = (gender, ageRange) => {
  const [minAge, maxAge] = ageRange === '50+' ? [50, Infinity] : ageRange.split('-').map(Number);
  const filteredData = data.filter(d => d.Gender === gender && d.Age >= minAge && d.Age <= maxAge);
  // console.log(`Filtered data for ${gender} in age range ${ageRange}:`, filteredData);

  if (filteredData.length === 0) {
      console.warn(`No data found for ${gender} in age range ${ageRange}. Defaulting to 1.`);
      return 1; // Default value if no data is found
  }

  const totalPhysicalActivity = filteredData.reduce((sum, d) => {
      if (typeof d.Physical_Activity_Hours === 'number') {
          return sum + d.Physical_Activity_Hours; // Ensure it's a number before adding
      }
      console.warn(`Non-numeric value found for ${gender}:`, d.Physical_Activity_Hours);
      return sum; // Continue summing without this entry
  }, 0);

  const averagePhysicalActivity = (totalPhysicalActivity / filteredData.length).toFixed(2); // Calculate the average and round to 2 decimal places
  // console.log(`Average physical activity for ${gender} in age range ${ageRange}: ${averagePhysicalActivity}`);
  return parseFloat(averagePhysicalActivity); // Convert back to a number
  
};

// Function to calculate average sleep for a gender category within a specific age range
const calculateAverageSleep = (gender, ageRange) => {
  const [minAge, maxAge] = ageRange === '50+' ? [50, Infinity] : ageRange.split('-').map(Number);
  const filteredData = data.filter(d => d.Gender === gender && d.Age >= minAge && d.Age <= maxAge);
  // console.log(`Filtered data for ${gender} in age range ${ageRange}:`, filteredData);

  if (filteredData.length === 0) {
      console.warn(`No data found for ${gender} in age range ${ageRange}. Defaulting to 1.`);
      return 1; // Default value if no data is found
  }

  const totalSleep = filteredData.reduce((sum, d) => {
      if (typeof d.Sleep_Hours === 'number') {
          return sum + d.Sleep_Hours; // Ensure it's a number before adding
      }
      console.warn(`Non-numeric value found for ${gender}:`, d.Sleep_Hours);
      return sum; // Continue summing without this entry
  }, 0);

  const averageSleep = (totalSleep / filteredData.length).toFixed(2); // Calculate the average and round to 2 decimal places
  // console.log(`Average sleep for ${gender} in age range ${ageRange}: ${averageSleep}`);
  return parseFloat(averageSleep); // Convert back to a number
  
};

let maleMetricAveragesArray = []
let femaleMetricAveragesArray = []
let otherMetricAveragesArray = []

const updateCharts = () => {
  const ageGroup = document.getElementById("age-group").value;

  // Calculate averages for each gender in the selected age group
  const avgStressMale = calculateAverageStress('Male', ageGroup);
  const avgStressFemale = calculateAverageStress('Female', ageGroup);
  const avgStressOther = calculateAverageStress('Other', ageGroup);

  maleMetricAveragesArray.splice(0, maleMetricAveragesArray.length);
  femaleMetricAveragesArray.splice(0, femaleMetricAveragesArray.length);
  otherMetricAveragesArray.splice(0, otherMetricAveragesArray.length);

  // Calculate averages for each gender in the selected age group
  const avgScreenTimeMale = calculateAverageScreenTime('Male', ageGroup);
        maleMetricAveragesArray.push(avgScreenTimeMale);

  const avgPhysicalActivityMale = calculateAveragePhysicalActivity('Male', ageGroup);
        maleMetricAveragesArray.push(avgPhysicalActivityMale);

  const avgSleepMale = calculateAverageSleep('Male', ageGroup);
        maleMetricAveragesArray.push(avgSleepMale);

  const avgScreenTimeFemale = calculateAverageScreenTime('Female', ageGroup);
        femaleMetricAveragesArray.push(avgScreenTimeFemale);
  
  const avgPhysicalActivityFemale = calculateAveragePhysicalActivity('Female', ageGroup);
        femaleMetricAveragesArray.push(avgPhysicalActivityFemale);

  const avgSleepFemale = calculateAverageSleep('Female', ageGroup);
        femaleMetricAveragesArray.push(avgSleepFemale);

  const avgScreenTimeOther = calculateAverageScreenTime('Other', ageGroup);
        otherMetricAveragesArray.push(avgScreenTimeOther);
  
  const avgPhysicalActivityOther = calculateAveragePhysicalActivity('Other', ageGroup);
        otherMetricAveragesArray.push(avgPhysicalActivityOther);
  
  const avgSleepOther = calculateAverageSleep('Other', ageGroup);
        otherMetricAveragesArray.push(avgSleepOther);

  console.log(maleMetricAveragesArray)
  console.log(femaleMetricAveragesArray)
  console.log(otherMetricAveragesArray)


  // Create the gauge charts with condition
  createGauge('gauge-male', avgStressMale, `Average Stress Level for Males (${ageGroup})`);
  createGauge('gauge-female', avgStressFemale, `Average Stress Level for Females (${ageGroup})`);
  createGauge('gauge-other', avgStressOther, `Average Stress Level for Others (${ageGroup})`);
  createBar();
};

// Function to create a gauge chart
const createGauge = (elementId, value, title) => {
  if (value < 1 || value > 3) {
      console.error(`Value ${value} for ${title} is out of range (1-3).`);
      return; // Skip creating the gauge if the value is out of range
  }

  const gaugeData = [
      {
          type: 'indicator',
          mode: 'gauge+number',
          value: value,
          title: { text: title, font: { size: 16 } },
          number: { font: { size: 40, color: 'blue' } },
          gauge: {
              axis: { range: [1, 3] },  // Set range from 1 to 3
              bar: { color: 'black' },
              bgcolor: 'white', // Background color of the gauge
              steps: [
                  { range: [1, 1.5], color: 'green' }, // Low stress
                  { range: [1.5, 2.5], color: 'yellow' }, // Medium stress
                  { range: [2.5, 3], color: 'red' }  // High stress
              ]
          }
      }
  ];

  const layout = {
      showlegend: false,
      font: { size: 20 } // Increase font size for better visibility
  };

  Plotly.newPlot(elementId, gaugeData, layout);
};

// Function to create a bar chart
const createBar = () => {

  let activityArray = ["Screen Time", "Physical Activity", "Sleep"]

  let trace1 = {
    x: activityArray,
    y: maleMetricAveragesArray,
    name: "Male",
    type: "bar"
  };

  let trace2 = {
    x: activityArray,
    y: femaleMetricAveragesArray,
    name: "Female",
    type: "bar"
  };

  let trace3 = {
    x: activityArray,
    y: otherMetricAveragesArray,
    name: "Other",
    type: "bar"
  };

  // Create data array
  let graphData = [trace1, trace2, trace3];


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

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot("bar", graphData, layout);
}

// Initialize the gauges with the default age group
updateCharts();


  // // Create the Bar Charts with condition
  // createBar('bar-male', avgScreenTimeMale, `Average Stress Level for Males (${ageGroup})`);
  // createBar('gauge-female', avgStressFemale, `Average Stress Level for Females (${ageGroup})`);
  // createBar('gauge-other', avgStressOther, `Average Stress Level for Others (${ageGroup})`);






