// Load the data and create charts
document.addEventListener('DOMContentLoaded', function() {
    d3.csv("mental_health_and_technology_usage_2024.csv").then(function(data) {
        // Parse numeric values
        data.forEach(d => {
            d.Age = +d.Age;
            d.Sleep_Hours = +d.Sleep_Hours;
            d.Technology_Usage = +d.Technology_Usage;
            d.Mental_Health_Score = +d.Mental_Health_Score;
        });
 
        //createScatterPlot(data);
        createLineChart(data);
        //createBarChart(data);
        //createBoxPlot(data);
    }).catch(function(error) {
        console.error("Error loading the CSV file:", error);
    });
});
 
// Function to create the scatter plot
function createScatterPlot(data) {
    var trace = {
        x: data.map(d => d.Age),
        y: data.map(d => d.Mental_Health_Score),
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 8,
            color: data.map(d => d.Age),
            colorscale: 'Viridis',
            colorbar: { title: 'Age' }
        }
    };

    var layout = {
        title: 'Technology Usage vs. Mental Health Score',
        xaxis: { title: 'Age' },
        yaxis: { title: 'Mental Health Score' },
        hovermode: 'closest'
    };
 
    Plotly.newPlot('scatterPlot', [trace], layout);
}
 
// Function to create the line chart
function createLineChart(data) {
    // Group data by age and calculate average sleep hours
    let ageGroups = {};
    data.forEach(d => {
        if (!ageGroups[d.Age]) {
            ageGroups[d.Age] = [];
        }
        ageGroups[d.Age].push(d.Sleep_Hours);
    });

    let ages = Object.keys(ageGroups).sort((a, b) => a - b);
    let avgSleepHours = ages.map(age => {
        return {
            age: +age,
            avgSleep: d3.mean(ageGroups[age])
        };
    });

    var trace = {
        x: avgSleepHours.map(d => d.age),
        y: avgSleepHours.map(d => d.avgSleep),
        mode: 'lines+markers',
        type: 'scatter'
    };

    var layout = {
        title: 'Average Sleep Hours by Age',
        xaxis: { title: 'Age' },
        yaxis: { title: 'Average Sleep Hours' }
    };

    Plotly.newPlot('lineChart', [trace], layout);
}

// Uncommented BoxPlot Layout Example (if needed in future)
function createBoxPlot(data) {
    let ageGroups = {
        '18-30': [],
        '31-50': [],
        '51+': []
    };
 
    data.forEach(d => {
        if (d.Age <= 30) ageGroups['18-30'].push(d.Sleep_Hours);
        else if (d.Age <= 50) ageGroups['31-50'].push(d.Sleep_Hours);
        else ageGroups['51+'].push(d.Sleep_Hours);
    });

    var traces = Object.keys(ageGroups).map(group => {
        return {
            y: ageGroups[group],
            type: 'box',
            name: group
        };
    });

    var layout = {
        title: 'Distribution of Sleep Hours by Age Group',
        yaxis: { title: 'Sleep Hours' }
    };

    Plotly.newPlot('boxPlot', traces, layout);
}
