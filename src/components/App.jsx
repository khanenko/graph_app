import React from 'react';
// import WebSocket from 'ws';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: null,
        };
    }

    componentDidMount() {
        const WebSocket = require('ws');
        const wss = new WebSocket('wss://api.bitfinex.com/ws/');
        wss.onmessage = (msg) => console.log(msg.data);
    }

    render() {

        return (
            <div>
                Hello
            </div>
        );
    }
}