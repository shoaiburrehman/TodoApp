import {StyleSheet} from 'react-native';
import { appShadow, colors } from '../../Utils/theme';
import { DEVICE_WIDTH, fontSizes, vh, vw } from '../../Utils/units';


export const styles = StyleSheet.create({
    subContainer: {
        width: vw * 90,
        marginHorizontal: vw * 5,
        padding: vh * 4,
        marginVertical: vh * 2,
        borderRadius: vw * 3,
        backgroundColor: colors.whiteColor,
        ...appShadow
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        fontSize: vh * 2.6,
        // fontWeight: 'bold',
        letterSpacing: 0,
        textAlign: "left",
        color: colors.textColor
    },
    descView: {
        marginTop: vh,
        justifyContent: 'center'
    },
    desc: {
        textAlign: "left",
        color: colors.textColor,
        fontSize: vh * 2.3
    },
    imgEditPencil: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: vw * 4,
    },
    deadlineView: {
        alignSelf: 'flex-end',
        marginTop: vh,
    },
    deadlineTxt: {
        color: colors.grayColor,
        fontSize: fontSizes.f12 * 1.1
    }
})