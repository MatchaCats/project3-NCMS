// Load the CSV file and create visualizations
d3.csv("JavascriptFolders/Marukha javascript/mental_health_and_technology_usage_2024.csv").then(function(data) {
    // 1. Create Scatter Plot 1: Age vs. Sleep Hours
    createScatterPlot1(data);

    // 2. Create Scatter Plot 2: Technology Usage vs. Mental Health Score
    createScatterPlot2(data);
}).catch(function(error) {
    
});

// Function to create the first scatter plot: Age vs. Sleep Hours
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

// Function to create the second scatter plot: Technology Usage vs. Mental Health
function createScatterPlot2(data) {
    var trace = {
        x: data.map(d => +d.Technology_Usage),
        y: data.map(d => +d.Mental_Health_Score), // Assuming this is a numeric column in your dataset
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 6,
            color: 'rgba(255, 99, 71, 0.5)'  // Different color to distinguish between scatter plots
        }
    };

    var layout = {
        title: 'Technology Usage vs. Mental Health',
        xaxis: { title: 'Technology Usage (Hours)' },
        yaxis: { title: 'Mental Health Score' },  // Adjust based on your dataset's mental health score column
    };

    Plotly.newPlot('scatterPlot2', [trace], layout);
}
