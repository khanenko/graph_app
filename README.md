# graph_app
This chart shows BTC/USD pair in real time
## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v9.8.0

    $ npm --version
    3.10.8
    
## Install

    $ git clone https://github.com/khanenko/graph_app.git
    $ cd graph_app
    $ npm install

### Configure app

Go to `/src/configs/requestConfig.js` then edit `requestPayload` object where you may set up request payload
```
key: "trade:1m:tBTCUSD"
```
`1m` means that timestamp of candle is one minute, you can set one of this:
- 1m: one minute
- 5m : five minutes
- 15m : 15 minutes
- 30m : 30 minutes
- 1h : one hour
- 3h : 3 hours
- 6h : 6 hours
- 12h : 12 hours
- 1D : one day
- 7D : one week
- 14D : two weeks
- 1M : one month

And also you can change pair tBTCUSD to [another](https://api.bitfinex.com/v1/symbols)

## Start

### Simple build
  
    $ npm run build
 
### Build for production
 
    $ npm run dist-build
    
### Open
  Open `index.html` by browser
