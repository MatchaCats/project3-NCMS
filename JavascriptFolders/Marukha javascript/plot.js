// Sample data to use as a fallback
const sampleData = [
    { Age: 25, Sleep_Hours: 7, Technology_Usage: 4, Mental_Health_Score: 75 },
    { Age: 30, Sleep_Hours: 6, Technology_Usage: 6, Mental_Health_Score: 65 },
    { Age: 35, Sleep_Hours: 8, Technology_Usage: 3, Mental_Health_Score: 80 },
    { Age: 40, Sleep_Hours: 7, Technology_Usage: 5, Mental_Health_Score: 70 },
    { Age: 45, Sleep_Hours: 6, Technology_Usage: 7, Mental_Health_Score: 60 }
];
 
document.addEventListener('DOMContentLoaded', function() {
    if (typeof d3 !== 'undefined') {
        // Try to load the CSV file
        d3.csv("mental_health_and_technology_usage_2024.csv").then(function(data) {
            createPlots(data);
        }).catch(function(error) {
            console.warn("Error loading the CSV file:", error);
            console.log("Using sample data instead.");
            createPlots(sampleData);
        });
    } else {
        console.error("D3 library is not loaded. Make sure you've included the D3 script in your HTML file.");
        createPlots(sampleData);
    }
});
 
function createPlots(data) {
    createScatterPlot1(data);
    createScatterPlot2(data);
}
 
function createScatterPlot1(data) {
    var trace = {
        x: data.map(d => +d.Age),
        y: data.map(d => +d.Sleep_Hours),
        mode: 'markers',
        type: 'scatter',
        marker: { size: 6, color: 'rgba(30, 144, 255, 0.5)' }
    };
    var layout = {
        title: 'Age vs. Sleep Hours',
        xaxis: { title: 'Age (Years)' },
        yaxis: { title: 'Sleep Hours' },
    };
    Plotly.newPlot('scatterPlot1', [trace], layout);
}
 
function createScatterPlot2(data) {
    var trace = {
        x: data.map(d => +d.Technology_Usage),
        y: data.map(d => +d.Mental_Health_Score),
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 6,
            color: 'rgba(255, 99, 71, 0.5)'
        }
    };
    var layout = {
        title: 'Technology Usage vs. Mental Health',
        xaxis: { title: 'Technology Usage (Hours)' },
        yaxis: { title: 'Mental Health Score' },
    };
    Plotly.newPlot('scatterPlot2', [trace], layout);
}
 
function optionChanged(selectedValue) {
    console.log("Selected value:", selectedValue);
    // Add your filtering and plot updating logic here
}
 
function initializeDropdown() {
    let options = ["All", "Age 20-30", "Age 31-40", "Age 41+"];
    let dropdown = document.getElementById("selDataset");
    options.forEach((option) => {
        let opt = document.createElement("option");
        opt.text = option;
        opt.value = option;
        dropdown.add(opt);
    });
}
 
initializeDropdown();