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
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    touchableEdit: {
        marginRight: vw * 2,
    },
    title: {
        fontSize: vh * 2.6,
        color: colors.textColor,
        width: vw * 58,
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
    },
    deadlineView: {
        alignSelf: 'flex-end',
        marginTop: vh,
    },
    deadlineTxt: {
        marginTop: vh * 0.5,
        color: colors.grayColor,
        fontSize: fontSizes.f12 * 1.1
    }
})