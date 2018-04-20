import {indexToKey, keysLength} from './format';
import {MAX_CANDLES_LENGTH, SECOND_LAST_CANDLE} from '../constants/constants';

export const prepareData = (rawData, processedData) => {
    const data = JSON.parse(rawData);
    let candleInfo = {};

    if (Array.isArray(data[1])) {
        data[1].forEach((item, i) => {
            if (Array.isArray(item)) {
                if (i < MAX_CANDLES_LENGTH) {
                    item.forEach((childItem, j) => {
                        if (j < keysLength) {
                            candleInfo[indexToKey[j]] = childItem;
                        }
                    });
                    processedData.unshift(candleInfo);
                    candleInfo = {};
                }
            } else {
                if (i < keysLength) {
                    candleInfo[indexToKey[i]] = item;
                }
            }
        });

        if( Object.keys(candleInfo).length != 0 ) {

            for (let i = SECOND_LAST_CANDLE; i < MAX_CANDLES_LENGTH; i++) {
                if(processedData[i].date == candleInfo.date) {
                    processedData[i] = candleInfo;
                    return true;
                }
            }

            processedData.shift();
            processedData.push(candleInfo);
        }
        return true;
    }
};