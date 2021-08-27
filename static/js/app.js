

d3.selectAll("input").on("change", runEnter);
d3.selectAll("select").on("change", runEnter);

plotWidth = 400
plotHeight = 250

function runEnter() {

    var demoInput1 = d3.select("#demoInput1").property("value");
    var demoInput2 = d3.select("#demoInput2").property("value");
    var demoInput3 = d3.select("#demoInput3").property("value");
    var demoInput4 = d3.select("#demoInput4").property("value");
    var demoInput5 = d3.select("#demoInput5").property("value");
    var demoInput6 = d3.select("#demoInput6").property("value");
    
    var resultCard = d3.select(".resultCard")
    
    d3.json("/predict/" + demoInput3 + "/" + demoInput4 + "/" + demoInput1 + "/" + demoInput2 + "/" + demoInput6 + "/" + demoInput5).then(result => {
        console.log(result)
        if (result = 0) {
            resultCard.id = "greenResult";
            resultCard.append("span").text("The Person Will Stay");
          } 
        else {
            resultCard.id = "redResult";
        }

    });


    d3.csv('../static/js/data.csv').then(ibmData => {
        var overTime = [];
        var marStatus = []
        var gender = []
        var sales = [];
        var companiesWorked = [];
        var totYearsWorked = [];



        ibmData.forEach(d => {
            overTime.push(d.OverTime);
            marStatus.push(d.MaritalStatus);
            gender.push(d.Gender);
            sales.push(d.SalesDpt);
            companiesWorked.push(+d.NumCompaniesWorked);
            totYearsWorked.push(+d.TotalWorkingYears);

        });

        // 1. COMPANIES WORKED FOR
        var trace = {
            x: companiesWorked,
            type: 'box',
            marker: { color: '#43BCCD' },
            boxmean: 'sd'
        };
        var data = [trace];

        var layout = {
            title: {
                text: "Number of Companies Worked For",
                font: {
                    color: '#43BCCD'
                },
            },
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 0,
                r: 5,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            // xaxis: {
            //     title: 'Fidelity',
            // },
            annotations: [
                {
                    font: {
                        color: '#404040'
                    },
                    yref: 'paper',
                    x: demoInput1,
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
                    x0: demoInput1,
                    y0: 0,
                    x1: demoInput1,
                    y1: 1,
                    line: {
                        color: '#404040',
                        width: 3
                    }
                }],


        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart1', data, layout, config);


       // 2. TOTAL YEARS WORKED
       var trace = {
        x: totYearsWorked,
        type: 'box',
        marker: { color: '#C14C8B' },
        boxmean: 'sd'
    };
    var data = [trace];

    var layout = {
        title: {
            text: "Total Number of Working Experience",
            font: {
                color: '#C14C8B'
            },
        },
        width: plotWidth,
        height: plotHeight,
        margin: {
            l: 0,
            r: 5,
            b: 40,
            t: 80,
            pad: 0
        },
        paper_bgcolor: '#eee',
        plot_bgcolor: '#eee',
        bargap: 0.2,
        // xaxis: {
        //     title: 'Fidelity',
        // },
        annotations: [
            {
                font: {
                    color: '#404040'
                },
                yref: 'paper',
                x: demoInput2,
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
                x0: demoInput2,
                y0: 0,
                x1: demoInput2,
                y1: 1,
                line: {
                    color: '#404040',
                    width: 3
                }
            }],


    };
    var config = { responsive: true }

    Plotly.newPlot('demoChart2', data, layout, config);



        // 3. OVERTIME  PLOT
        var data = [{
            x: overTime,
            type: 'histogram',
            marker: { color: '#F6C84E' },
            boxmean: 'sd',
            showticklabels: false
        }]

        // var data = [trace];

        var layout = {
            title: {
                text: "Receives Overtime Pay",
                font: {
                    color: '#F6C84E'
                }
            },
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 0,
                r: 5,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            // xaxis: {
            //     title: 'Receives Overtime Pay',
            // },

            annotations: [
                {
                    font: {
                        color: '#404040'
                    },
                    yref: 'paper',
                    x: demoInput3,
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
                    x0: demoInput3,
                    y0: 0,
                    x1: demoInput3,
                    y1: 1,
                    line: {
                        color: '#404040',
                        width: 3
                    }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart3', data, layout, config);

        // 4. Marital Status
        var trace = {
            x: marStatus,
            type: 'histogram',
            marker: { color: '#0D31AE' },
            boxmean: 'sd'
        };
        var data = [trace];

        var layout = {
            title: {
                text: "Marital Status",
                font: {
                    color: '#0D31AE'
                },
            },
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 0,
                r: 5,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            // xaxis: {
            //     title: 'Status',
            // },
            annotations: [
                {
                    font: {
                        color: '#404040'
                    },
                    yref: 'paper',
                    x: demoInput4,
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
                    x0: demoInput4,
                    y0: 0,
                    x1: demoInput4,
                    y1: 1,
                    line: {
                        color: '#404040',
                        width: 3
                    }
                }],


        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart4', data, layout, config);


        // 5. Gender
        var trace = {
            x: gender,
            type: 'histogram',
            marker: { color: '#E24862' },
            boxmean: 'sd'
        };
        var data = [trace];

        var layout = {
            title: {
                text: "Gender",
                font: {
                    color: '#E24862',
                    weight: 'bold'
                },
            },
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 0,
                r: 5,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            // xaxis: {
            //     title: 'Gender',
            //                },
            annotations: [
                {
                    font: {
                        color: '#404040'
                    },
                    yref: 'paper',
                    x: demoInput5,
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
                    x0: demoInput5,
                    y0: 0,
                    x1: demoInput5,
                    y1: 1,
                    line: {
                        color: '#404040',
                        width: 3
                    }
                }],
        };
        var config = { responsive: true }

        Plotly.newPlot('demoChart5', data, layout, config);


        // 6. SALES
        var trace = {
            x: sales,
            type: 'histogram',
            marker: { color: '#AFBAF4' },
            boxmean: 'sd'
        };
        var data = [trace];

        var layout = {
            title: {
                text: "Works in Sales Department",
                font: {
                    color: '#AFBAF4'
                },
            },
            width: plotWidth,
            height: plotHeight,
            margin: {
                l: 0,
                r: 5,
                b: 40,
                t: 80,
                pad: 0
            },
            paper_bgcolor: '#eee',
            plot_bgcolor: '#eee',
            bargap: 0.2,
            // xaxis: {
            //     title: 'Years',
            // },
            annotations: [
                {
                    font: {
                        color: '#404040'
                    },
                    yref: 'paper',
                    x: demoInput6,
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
                    x0: demoInput6,
                    y0: 0,
                    x1: demoInput6,
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