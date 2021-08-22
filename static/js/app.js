

d3.selectAll("input").on("change",runEnter);

plotWidth = 400
plotHeight = 250

function runEnter(demoImput1) {

    var demoImput1 = d3.select("#demoInput1").property("value");
    var demoImput2 = d3.select("#demoInput2").property("value");
    var demoImput3 = d3.select("#demoInput3").property("value");
    var demoImput4 = d3.select("#demoInput4").property("value");
    var demoImput5 = d3.select("#demoInput5").property("value");
    var demoImput6 = d3.select("#demoInput6").property("value");

    d3.csv('../static/js/data.csv').then(ibmData => {
        var trainTime = [];
        var distHome = [];
        var jobSat = [];
        var workYears = [];
        var monInc = []

        ibmData.forEach(d => {
            trainTime.push(+d.TrainingTimesLastYear);
            distHome.push(+d.DistanceFromHome);
            jobSat.push(+d.JobSatisfaction);
            workYears.push(+d.TotalWorkingYears);
            monInc.push(+d.MonthlyIncome);

        });

        // 1. TRAINING TIME PLOT
        var trace = {
            x: trainTime,
            type: 'histogram',
        };
        var data = [trace];

        var layout = {
            title: "Training Time",
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 30,
                r: 10,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            xaxis: {
                title: 'Training Days',
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            yaxis: {
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            annotations: [
                {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoImput1,
                y: .8,
                text: 'Employee Profile',
                showarrow: true,
                arrowhead: 7,
                }
            ],
            shapes: [
                {
                  type: 'line',
                  yref: 'paper',
                  x0: demoImput1,
                  y0: 0,
                  x1: demoImput1,
                  y1: 1,
                  line: {
                    color: '#404040',
                    width: 3
                  }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart1', data, layout, config);

        // 2. TRAINING TIME PLOT
        var trace = {
            x: distHome,
            type: 'histogram',
        };
        var data = [trace];

        var layout = {
            title: "Distance from Home",
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 30,
                r: 10,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            xaxis: {
                title: 'Distance',
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            yaxis: {
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            annotations: [
                {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoImput2,
                y: .8,
                text: 'Employee Profile',
                showarrow: true,
                arrowhead: 7,
                }
            ],
            shapes: [
                {
                  type: 'line',
                  yref: 'paper',
                  x0: demoImput2,
                  y0: 0,
                  x1: demoImput2,
                  y1: 1,
                  line: {
                    color: '#404040',
                    width: 3
                  }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart2', data, layout, config);

        // 3. JOB SATISFACTION PLOT
        var trace = {
            x: jobSat,
            type: 'histogram',
        };
        var data = [trace];

        var layout = {
            title: "Job Satisfaction",
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 30,
                r: 10,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            xaxis: {
                title: 'Satisfaction Rating',
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            yaxis: {
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            annotations: [
                {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoImput3,
                y: .8,
                text: 'Employee Profile',
                showarrow: true,
                arrowhead: 7,
                }
            ],
            shapes: [
                {
                  type: 'line',
                  yref: 'paper',
                  x0: demoImput3,
                  y0: 0,
                  x1: demoImput3,
                  y1: 1,
                  line: {
                    color: '#404040',
                    width: 3
                  }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart3', data, layout, config);

        // 4. TOTAL WORKING TIME PLOT
        var trace = {
            x: workYears,
            type: 'histogram',
        };
        var data = [trace];

        var layout = {
            title: "Total Years Working",
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 30,
                r: 10,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            xaxis: {
                title: 'Years',
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            yaxis: {
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            annotations: [
                {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoImput4,
                y: .8,
                text: 'Employee Profile',
                showarrow: true,
                arrowhead: 7,
                }
            ],
            shapes: [
                {
                  type: 'line',
                  yref: 'paper',
                  x0: demoImput4,
                  y0: 0,
                  x1: demoImput4,
                  y1: 1,
                  line: {
                    color: '#404040',
                    width: 3
                  }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart4', data, layout, config);


        // 6. MONTHLY INCOME PLOT
        var trace = {
            x: monInc,
            type: 'histogram',
        };
        var data = [trace];

        var layout = {
            title: "Monthly Income",
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 30,
                r: 10,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            xaxis: {
                title: 'Income',
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            yaxis: {
                // linecolor: 'black',
                // linewidth: 1,
                // mirror: true
            },
            annotations: [
                {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoImput6,
                y: .8,
                text: 'Employee Profile',
                showarrow: true,
                arrowhead: 7,
                }
            ],
            shapes: [
                {
                  type: 'line',
                  yref: 'paper',
                  x0: demoImput6,
                  y0: 0,
                  x1: demoImput6,
                  y1: 1,
                  line: {
                    color: '#404040',
                    width: 3
                  }
                }],


        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart6', data, layout, config);
    });
};

runEnter()