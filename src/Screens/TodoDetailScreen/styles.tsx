import {StyleSheet} from 'react-native';
import { colors } from '../../Utils/theme';
import { fontSizes, vh, vw } from '../../Utils/units';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flex: 1,
        marginTop: vh * 5,
        width: vw * 85,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vh * 2,
    },
    title: {
        fontSize: fontSizes.f24,
        color: colors.black,
        width: vw * 70,
    },
    touchableEdit: {
        marginTop: vh,
        alignSelf: 'flex-start'
    },
    innerContainer: {
        marginVertical: vh * 3,
    },
    titleText: {
        fontSize: fontSizes.f16,
        color: colors.black,
        marginBottom: vh * 1,    
    },
    infoText: {
        fontSize: fontSizes.f16,
        color: colors.grayColor,
    },
    btn: {
        marginVertical: vh * 3,
        width: vw * 50,
        height: vh * 8,
        borderRadius: vw * 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
        // backgroundColor: colors.themeColor
    },
    btnText: {
        fontSize: fontSizes.f14,
        textAlign: "center",
        color: colors.white,
    },
    
});
  