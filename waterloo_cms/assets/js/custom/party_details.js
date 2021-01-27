/* ------------------------------------------------------------------------------
*
*  # User profile
*
*  Specific JS code additions for User profile pages set
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Charts
    // ------------------------------

    // Set paths
    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/line',   // load-on-demand, don't forget the Magic switch type.
            'echarts/chart/bar'
        ],


        // Charts setup
        function (ec, limitless) {

            let a= document.getElementById('sales')

            // Init
            // var sales = ec.init(document.getElementById('sales'), limitless);


            //
            // Sales chart options
            //

            sales_options = {

                // Setup grid
                grid: {
                    x: 35,
                    x2: 15,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data:['Profit', 'Expenses', 'Income']
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'value'
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
                }],

                // Add series
                series: [
                    {
                        name: 'Profit',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside'
                                }
                            }
                        },
                        data: [200, 170, 240, 244, 200, 220, 210]
                    },
                    {
                        name: 'Income',
                        type: 'bar',
                        stack: 'Total',
                        barWidth: 5,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                }
                            }
                        },
                        data: [320, 302, 341, 374, 390, 450, 420]
                    },
                    {
                        name: 'Expenses',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'left'
                                }
                            }
                        },
                        data: [-120, -132, -101, -134, -190, -230, -210]
                    }
                ]
            };


            //
            // Plans chart options
            //

            // Text label options
            var labelRight = {normal: {color: '#FF7043', label: {position: 'right'}}};

            // Options
            visits_options = {

                // Setup grid
                grid: {
                    x: 15,
                    x2: 15,
                    y: 0,
                    y2: 25,
                    borderWidth: 0
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function(params) {
                        return params[0].seriesName + ': ' + params[0].value + ' €';
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                    axisLine: {show: false},
                    splitLine: {show: false},
                    axisTick: {show: false}
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {
                        lineStyle:{
                            type:'dashed',
                            color: '#e5e5e5'
                        }
                    },
                    data : ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']
                }],

                // Add series
                series: [
                    {
                        name: 'Balance',
                        type: 'bar',
                        stack: 'Total',
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                color: '#66BB6A',
                                barBorderRadius: 3,
                                label: {
                                    show: true,
                                    position: 'left',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#777'
                                    }
                                }
                            },
                            emphasis: {
                                barBorderRadius: 3
                            }
                        },
                        data: [
                            {value: -680, itemStyle: labelRight},
                            {value: -300, itemStyle: labelRight},
                            690,
                            900, 
                            {value: -390, itemStyle: labelRight},
                            600,
                            {value: -120, itemStyle: labelRight}
                        ]
                    }
                ]
            };


            //
            // Available time chart options
            //

            plans_options = {

                // Setup grid
                grid: {
                    x: 30,
                    x2: 10,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data:['Booked hours', 'Available hours']
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value'
                }],

                // Add series
                series: [
                    {
                        name: 'Booked hours',
                        type: 'bar',
                        data: [4, 8, 6, 4, 7, 5, 9],
                        itemStyle: {
                            normal: {
                                color: '#B0BEC5',
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        }
                    },
                    {
                        name: 'Available hours',
                        type: 'bar',
                        data: [6, 2, 4, 6, 3, 5, 1],
                        itemStyle: {
                            normal: {
                                color: '#29B6F6',
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        }
                    }
                ]
            };


            //
            // Apply options
            //

            // sales.setOption(sales_options);


            //
            // Resize chart
            //

            window.onresize = function () {
                setTimeout(function (){
                    sales.resize();
                }, 200);
            }


            // Resize in tabs
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                sales.resize();
                plans.resize();
            });
        }
    );



    // Form components
    // ------------------------------

    // Select2 selects
    $('.select').select2({
        minimumResultsForSearch: Infinity
    });


    // Styled file input
    $(".file-styled").uniform({
        fileButtonClass: 'action btn bg-warning'
    });


    // Styled checkboxes, radios
    $(".styled").uniform({
        radioClass: 'choice'
    });



    // Schedule
    // ------------------------------

    // Add events
    var eventsColors = [
        {
            title: 'Meeting',
            start: '2014-11-01',
            color: '#EF5350'
        },
        {
            title: 'Call request',
            start: '2014-11-07',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'Setup Session',
            start: '2014-11-09T16:00:00',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'CTS Contract Signed',
            start: '2014-11-16T16:00:00',
            color: '#5C6BC0'
        },
        {
            title: 'CMS Opportunity Added',
            start: '2014-11-11',
            end: '2014-11-11',
            color: '#546E7A'
        },
        {
            title: 'MMS Expiry date',
            start: '2014-11-12T10:30:00',
            end: '2014-11-12T12:30:00',
            color: '#EF5350'
        },
        {
            title: 'MMS Renewal Reminder',
            start: '2014-11-02T12:00:00',
            color: '#546E7A'
        },
    ];


    // Initialize calendar with options
    $('.schedule').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-11-12',
        editable: true,
        events: eventsColors
    });


    // Render in hidden elements
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.schedule').fullCalendar('render');
    });
    
});