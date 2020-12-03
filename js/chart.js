var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    
    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Cambios de Temperatura',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: '#89609e',
            data: []
        }]
    },

    // Configuration options go here
    options: {}
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
            var sensor1Data ;    // equivalent to sensor1Value
            var sensor2Data ;    // equivalent to sensor2Value
            var sensorTime ;    // converts timestamp to time (used as label)
            for(row in jsonData){
                // Extract sensor1Data
                sensor1Data = jsonData[row]['sensor1Value'];
                sensor2Data = jsonData[row]['sensor2Value'];
                // Extract time from timestamp
                sensorTime = new Date(jsonData[row]['timestamp']).toLocaleTimeString();
                // Add data to chart
                addData(myChart, sensorTime, sensor1Data);
            }
            gauge.set(sensor2Data); // set value of the gauge to the last value of sensor2Value
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
                var sensor1Data = jsonData[0]['sensor1Value']; 
                var sensor2Data = jsonData[0]['sensor2Value']; 
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
                    gauge.set(sensor2Data); // set actual value
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
