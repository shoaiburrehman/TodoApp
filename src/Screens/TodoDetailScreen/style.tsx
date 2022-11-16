import {StyleSheet} from 'react-native';
import { colors } from '../../Utils/theme';
import { DEVICE_WIDTH, vh, vw } from '../../Utils/units';


export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    dashboardContainer: {
      height: vh * 30, 
      width: DEVICE_WIDTH, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    pendingContainer: {
      flex: 1,
      width: DEVICE_WIDTH, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    titleText: {
      alignSelf: 'flex-start',
      marginLeft: vw * 5,
      marginTop: vh * 5,
      color: colors.textColor, 
    },
    header: {
        // width: DEVICE_WIDTH,
        // height: "12%",
        // backgroundColor: COLORS.whiteColor,
        // alignItems: 'center',
        // paddingTop: verticalScale(30),
        elevation: 5,
        flexDirection: 'row', 
        paddingTop: vh * 10,
    },
    btnImg: {
        width: "100%",
        height: "100%"
    },
    listView: {
        width: '100%',
        paddingLeft: vw * 10,
        paddingRight: vw * 10,
        // marginTop: moderateScale(25),
        // marginBottom: moderateScale(25),
        //height: verticalScale(460),
        
    },
    subContainer: {
      width: DEVICE_WIDTH-25,
      padding: vh * 6,
      marginTop: vh * 6,
      borderRadius: vw * 3,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 1,
      backgroundColor: colors.whiteColor,
    },
    heading1: {
      letterSpacing: 0,
      lineHeight: vh * 2.5,
      textAlign: "left",
      color: colors.textColor
    },
    heading2: {
        letterSpacing: 0,
        lineHeight: vh * 2.5,
        textAlign: "left",
        color: colors.lightTextColor
    },
    textContainer: {
        width: "65%"
    },
    btn: {
        width: "100%",
        alignSelf: 'center'
    },
    img: {
        height: vh * 2,
        width: vw * 4,
        resizeMode: 'contain',
    },
    imgEditPencil: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: vh * 2.2,
        width: vw * 4,
    },
    btnImage: {
        width: vw * 7,
        height: vh * 1.5,
        resizeMode: 'contain',
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        letterSpacing: 0,
        textAlign: "left",
        color: colors.textColor
    },
    ViewSide: {
      position: 'absolute',
      right: vw * 4,
      bottom: 0,
      height: 22,
      width: 22,
    },
    isCompleted: {
      color: colors.themeColor,
    },
    desc: {
        height: vh * 4,
        textAlign: "left",
        color: colors.textColor,
    },
    btnGradient: {
        marginTop: vh * 3.5,
        marginBottom: vh * 3.5,
        width: "75%",
        alignSelf: 'center',
    },
    addContainer: {
        flex: 1,
        paddingHorizontal: vw * 10,
        marginRight: 0,
      alignItems: 'flex-end',
    },
    emptyImg: {
        width: "100%",
        height: '75%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    btn1: {
        width: vw * 15,
        height: vh * 5,
        borderRadius: (vh * 5) / 2,
    },
    textStyle: {
        alignItems: 'center',
        letterSpacing: 0,
        textAlign: "center",
        justifyContent: 'center',
        color: colors.lightTextColor
    },
    gradientButtonContainer: {
        width: "80%",
        // position: 'absolute',
        alignSelf: 'center',
        marginTop: vh * 3,
        marginBottom: vh * 5,
    },
    horizontalLine: {
      flex: 1,
      height: 1,
      marginVertical: 3,
      // backgroundColor: colors.labelColor,
      // borderColor: 'red',
      // borderWidth: 0.5,
  
    },
    footer:{
      // flex: 1,
      position: 'absolute',
      bottom: 1,
      flexDirection: 'row',
      // right: 0,
      width: DEVICE_WIDTH,
      height: vh * 12,
      paddingVertical: vh * 3,
      // borderColor: 'green',
      // borderWidth: 1,
      // backgroundColor: COLORS.bgColor,
    },
  
  });
  