const updateCharts = () => {
    const ageGroup = document.getElementById("age-group").value;

    // Calculate averages for each gender in the selected age group
    const avgStressMale = calculateAverage('Male', ageGroup);
    const avgStressFemale = calculateAverage('Female', ageGroup);
    const avgStressOther = calculateAverage('Other', ageGroup);

    // Create the gauge charts with condition
    createGauge('gauge-male', avgStressMale, `Average Stress Level for Males (${ageGroup})`);
    createGauge('gauge-female', avgStressFemale, `Average Stress Level for Females (${ageGroup})`);
    createGauge('gauge-other', avgStressOther, `Average Stress Level for Others (${ageGroup})`);
};