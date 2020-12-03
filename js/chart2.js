// Create Chart with no data
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],         // Labels are empty
        datasets: [{
            label: 'Distance [mm]',
            data: [],       // Data is empty Adding it later, allows to see a pretty animation!
            fill: false,
            borderColor: '#89609e',     
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Distancia'
        },
        scales: {
        }
    }
});

// Function to add new data to a chart
function addData(chart, label, data) 
{
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => 
    {
        dataset.data.push(data);
    });
    chart.update();
}

// Plot all the data at the database
$.ajax(
    '../data/all.php',
    {
        success: function(data) {
            var jsonData = JSON.parse(data);
            var sensor3Data ;    // equivalent to sensor1Value
            var sensor4Data ;    // equivalent to sensor2Value
            var sensorTime ;    // converts timestamp to time (used as label)
            for(row in jsonData){
                // Extract sensor1Data
                sensor3Data = jsonData[row]['sensor3Value'];
                sensor4Data = jsonData[row]['sensor4Value'];
                // Extract time from timestamp
                sensorTime = new Date(jsonData[row]['timestamp']).toLocaleTimeString();
                // Add data to chart
                addData(myChart, sensorTime, sensor1Data);
            }
            gauge.set(sensor4Data); // set value of the gauge to the last value of sensor2Value
        },
        error: function() {
          console.log('There was some error performing the AJAX call!');
        }
     }
  );
  

  // Every 0.5s check for new data
  function fetchLastData(){
    $.ajax(
        '../data/last.php',
        {
            success: function(data) {
                var jsonData = JSON.parse(data);
                var sensor3Data = jsonData[0]['sensor3Value']; 
                var sensor4Data = jsonData[0]['sensor4Value']; 
                var sensorTime = new Date(jsonData[0]['timestamp']).toLocaleTimeString();   
                /* 
                Use the last time the sensor was updated, and compare that time with
                last record time. If different, update table.
    
                This technique is for demonstration purposes. A better way, should be 
                add another field at the database and update it when data was added to chart.
                */
                if(myChart.data.labels[myChart.data.labels.length - 1] === sensorTime)
                {
                    // Do nothing
                    console.log('No new data');
                }
                else
                {
                    // Add new record to chart
                    addData(myChart, sensorTime, sensor1Data);
                    gauge.set(sensor5Data); // set actual value
                }
    
            },
            error: function() {
              console.log('There was some error performing the AJAX call!');
            }
        }
    );
  }
  
setInterval(function(){ 
    fetchLastData(); 
}, 500);
