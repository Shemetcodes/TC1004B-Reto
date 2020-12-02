var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    
    // The data for our dataset
    data: {
        labels: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'],
        datasets: [{
            label: 'Cambios de Temperatura',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: '#6FADCF',
            data: [24, 25, 28, 30, 33, 30, 28]
        }]
    },

    // Configuration options go here
    options: {}
});