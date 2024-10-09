# project3-NCMS

This project involves building an interactive dashboard to explore a Mental Health and Technology dataset (see resources) using Javascript, Plotly, and Chart.js
This project's dataset consists of results from 10,000 participants and was stored, cleaned, and extracted using a MongoDB database

The dropdown menu on the dashboard filters all data into four age-range categories: 1) 18-29, 2) 30-39, 3) 40-49, and 4) 50+
A plotly Bar chart displays average daily hours of screen time, physical activity, and sleep by gender (male, female, other)
A plotly gauge chart for each gender (male, female, and other) displays average stress level
A chart.js bar chart displays average overall social media usage and physical activity hours

In our data visualization project, we recognized the critical importance of data privacy and anonymity, especially when handling sensitive information such as mental health status. To avoid the risk of revealing personally identifiable information, we ensured that all visualizations presented aggregated data rather than show individual responses. All participants in the dataset were referred to only by created ID numbers, which further protected their identities and helped prevent any potential stigmatization that might arise from misinterpreting specific data points. By anonymizing the data in this way, we aimed to foster a respectful and ethical environment for discussing the implications of technology usage on mental health. The data was collected through self-reported surveys, highlighting the importance of considering the subjective nature of the responses in our analysis.

Additionally, we committed to maintaining the accuracy and integrity of our analysis. We verified that the dataset sourced from Kaggle was reliable and up-to-date, as misrepresentation could lead to harmful conclusions. Our visualizations were grounded in contextual integrity, providing viewers with a clear understanding of the data’s origins. By transparently communicating our methodology and findings, we aimed to build trust with our audience and ensure that our visualizations served as a responsible exploration of the relationship between technology usage and mental health indicators.

In our findings and analysis of the impact of technology usage on mental health, we found that screen time has an inverse relationship with mental well-being. The first bar chart indicates that individuals who spend more than the average 5-7 hours per day on screens—especially on social media—tend to experience declining mental health and increased stress levels.
Further analysis of age demographics revealed that young adults (ages 18-29 & 30-39) are the most frequent technology users, often spending substantial time online to stay connected and manage daily tasks. The gauge chart reflects high-stress levels in this group.
However, technology does not have negative effecs all the time as far as we balance it. The dataset also highlighted its positive effects; individuals engaged in online support systems—such as mental health communities and counseling platforms—reported improved mental health outcomes. This suggests that using technology to connect with others can provide significant benefits.



Resources:
Dataset source: https://www.kaggle.com/datasets/waqi786/mental-health-and-technology-usage-dataset
