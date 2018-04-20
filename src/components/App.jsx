import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import cloneDeep from 'lodash/cloneDeep'
import {makeConfig} from '../configs/chartconfig';
import {prepareData} from '../utils/prepareData';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProvider: []
        };
    }

    componentDidMount() {
        const wss = new WebSocket('wss://api.bitfinex.com/ws/2');
        const processedData = [];

        wss.onmessage = (msg) => {
            if (prepareData(msg.data, processedData)) {
                this.setState({dataProvider: processedData});
            }
        };

        const msg = JSON.stringify({
            event: "subscribe",
            channel: "candles",
            key: "trade:1m:tBTCUSD"
        });

        wss.onopen = () => wss.send(msg);
    }

    render() {
        const {dataProvider} = this.state;
        const config = cloneDeep(makeConfig(dataProvider));

        return (
            <div className="App">
                <AmCharts.React className="AmChart" options={config} />
            </div>
        );
    }
}