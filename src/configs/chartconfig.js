export const makeConfig = dataProvider => ({
    hideCredits: true,
    type: "serial",
    theme: "black",
    valueAxes: [ {
        position: "left"
    } ],
    graphs: [ {
        id: "g1",
        balloonText: "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
        closeField: "close",
        fillColors: "transparent",
        highField: "high",
        lineColor: "green",
        lineAlpha: 1,
        lowField: "low",
        fillAlphas: 0.6,
        negativeFillColors: "red",
        negativeLineColor: "red",
        openField: "open",
        title: "Price:",
        type: "candlestick",
        valueField: "close"
    } ],
    chartScrollbar: {
        graph: "g1",
        graphType: "line",
        scrollbarHeight: 30
    },
    chartCursor: {
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        categoryBalloonDateFormat: "JJ:NN"
    },
    categoryField: "date",
    categoryAxis: {
        parseDates: true,
        equalSpacing: true,
        minPeriod: "mm"
    },
    dataProvider: dataProvider
});