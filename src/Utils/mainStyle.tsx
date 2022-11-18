import {StyleSheet} from 'react-native';
import { appShadow, colors } from './theme';
import { DEVICE_WIDTH, vh, vw } from './units';
const MainStyle = StyleSheet.create({
    flex: {
        flex: 1,
    },
    themeColor: {
        color: colors.themeColor
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },    
})

export default MainStyle;