import {Dimensions} from 'react-native';

export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

console.log('vh: ', vh, ' vw: ', vw)

export const fontSizes = {
    f40: vh * 5.8,
    f36: vh * 5.2,
    f28: vh * 4.1,
    f24: vh * 3.52,
    f20: vh * 2.93,
    f18: vh * 2.65,
    f16: vh * 2.35,
    f15: vh * 1.2,
    f14: vh * 2.1,
    f12: vh * 1.8,
    f10: vh * 1.5,
    f8: vh * 1.1
}
