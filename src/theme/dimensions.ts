import {Dimensions, Platform} from 'react-native';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

const COLUMN_PADDING: number = width * 0.05;
const COLUMN_MARGIN: number = height * 0.01;

const HEADER_HEIGHT: number = Platform.OS === 'ios' ? 50 : 55;

export {COLUMN_MARGIN, COLUMN_PADDING, width, height, HEADER_HEIGHT};
