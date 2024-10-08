// Sample data to use as a fallback
const ages = [18, 32, 50, 60, 70];
const Sleep_Hours = [4, 5, 6, 8, 9];

for (let i=0; i < +ages.length; i++){
    
}
 
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

function initializeDropdown() {
    let options = ["All", "Age 18-30", "Age 31-50", "Age 51+"];
    let dropdown = document.getElementById("selDataset");
    options.forEach((option) => {
        let opt = document.createElement("option");
        opt.text = option;
        opt.value = option;
        dropdown.add(opt);
    });
}
 
initializeDropdown();
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
 
function createScatterPlot2(data){
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
    //Plotly.newPlot('scatterPlot2', [trace], layout);
}
    

 
