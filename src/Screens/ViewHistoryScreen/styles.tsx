import {StyleSheet} from 'react-native';
import { colors } from '../../Utils/theme';
import { vh, vw } from '../../Utils/units';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: vw * 30,
        height: vh * 5.5,
        borderRadius: vw * 2,
        marginHorizontal: vw * 2,
        justifyContent: 'center',
        alignItems: 'center'
        // ...appShadow
    },
    leftButton: {
        width: vw * 30,
        height: vh * 5.5,
        backgroundColor: colors.lightRed,
        borderRadius: vw * 2,
        marginHorizontal: vw * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inActiveLeftBtn: {
        width: vw * 30,
        height: vh * 5.5,
        backgroundColor: colors.grayColor3,
        borderRadius: vw * 2,
        marginHorizontal: vw * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsRow: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: vw * 2.5,
        marginVertical: vh * 2.5,
    },
    
});
