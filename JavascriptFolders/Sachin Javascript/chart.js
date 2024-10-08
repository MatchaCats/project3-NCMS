// import Chart from 'chart.js/auto';
// let socialMedia = [];
// let physicalActivity = [];

// for (let i = 0; i < data.length; i++) {
//     row = data[i];
//     socialMedia.push(row.Social_Media_Usage_Hours);
// }
// for (let i = 0; i < data.length; i++) {
//     row = data[i];
//     physicalActivity.push(row.Physical_Activity_Hours);
// }

// function mean(socialMedia) {
//     let total = 0;
//     for (let i = 0; i < socialMedia.length; i++) {
//       total += socialMedia[i];
//     }
//     let socialMediameanValue = total / socialMedia.length;
  
//     return socialMediameanValue;
//   }

//   function mean(physicalActivity) {
//     let total = 0;
//     for (let i = 0; i < physicalActivity.length; i++) {
//       total += physicalActivity[i];
//     }
//     let physicalActivitymeanValue = total / physicalActivity.length;
  
//     return physicalActivitymeanValue;
//   }

// const config = {
//     type: 'scatter',
//     data: data,
//     options: {
//       scales: {
//         x: {
//           type: 'linear',
//           position: 'bottom'
//         }
//       }
//     }
//   };

//   const data = {
//     datasets: [{
//       label: 'Social Media Usage vs. Physical Activity',
//       data: [socialMediameanValue, physicalActivity],
//       backgroundColor: 'rgb(255, 99, 132)'
//     }],
//   };


import Chart from 'chart.js/auto';

let socialMedia = [];
let physicalActivity = [];

const data = {
    datasets: [{
        label: 'Social Media Usage vs. Physical Activity',
        data: [{ x: socialMediaMean, y: physicalActivityMean }],
        backgroundColor: 'rgb(255, 99, 132)'
    }],
};

const config = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};

for (let i = 0; i < data.length; i++) {
    socialMedia.push(data[i].Social_Media_Usage_Hours);
    physicalActivity.push(data[i].Physical_Activity_Hours);
}

function meanSocialMedia(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);
    return total / arr.length;
}

function meanPhysicalActivity(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);
    return total / arr.length;
}

const socialMediaMean = meanSocialMedia(socialMedia);
const physicalActivityMean = meanPhysicalActivity(physicalActivity);
// Initialize Chart
const myChart = new Chart(document.getElementById('myChart'), config);
