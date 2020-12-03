var opts = {
  angle: 0.04, // The span of the gauge arc
  lineWidth: 0.3, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  staticLabels: {
      font: "10px sans-serif",  // Specifies font
      labels: [0, 20, 40, 60, 80, 100],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#89609e',   // Colors
  colorStop: '#89609e',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  percentColors: [[0.0, "#74B72E" ], [60, "#FFE12B"], [80, "#ED2939"]]   // Make color react according to the position of the needle
  
};

var target = document.getElementById('myGauge2'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!

gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 57; // set animation speed (32 is default value)