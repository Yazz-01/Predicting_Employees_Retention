// GET DATA
var data = data;

// EVENT HANDLER

// filterButton.on('click', runEnter);
d3.selectAll("form-label").on("change",runEnter);

// FUNCTION FOR EVENT HANDLER
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing result
    var tbody = d3.select("modelResult")
    tbody.html("");

    // Select the input element and get the raw HTML node
    var demoInput1 = d3.select("#demoInput1").property("value");
    var demoInput2 = d3.select("#demoInput2").property("value");
    var demoInput3 = d3.select("#demoInput3").property("value");
    var demoInput4 = d3.select("#demoInput4").property("value");
    var demoInput5 = d3.select("#demoInput5").property("value");
    var demoInput6 = d3.select("#demoInput6").property("value");

    // d3.json("http://127.0.0.1:5000/predict/" + demoInput1+ "/" + demoInput2 + "/" + demoInput3 + "/" + demoInput5 + "/" + demoInput4 + "/" + demoInput6).then(result => {
    // });

    var x = data.JobSatisfaction;

    var trace = {
        x: x,
        type: 'histogram',
      };
    var data = [trace];
    Plotly.newPlot('myDiv', data);



};



