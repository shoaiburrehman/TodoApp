import {StyleSheet} from 'react-native';
import {colors} from '../../../Utils/theme';
import {fontSizes, vh, vw} from '../../../Utils/units';

export default styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
  containerStyle: {
    width: vw * 100,
  },
  container: {
    alignItems: "center",
    width: vw * 100,
    borderTopLeftRadius: vw * 15,
    borderTopRightRadius: vw * 15,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    width: vw * 100,
    marginTop: vh * 2.5,
    marginBottom: vh * 4,
    alignItems: 'flex-start',
  },
  lightHead: {
    marginTop: vh * 2,
    color: colors.grayText2,
    fontSize: fontSizes.f14
  },
  marginTop: {
    marginTop: vh * 2,
  },
  touchableSelect: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 100,
    height: vh * 6.5,
  },
  touchableText: {
    fontSize: fontSizes.f16,
    color: colors.black
  },
  arrowDown: {
    width: vw * 2.5,
    height: vw * 2.5,
    resizeMode: 'contain'
  },
  dropDownView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw * 5,
    marginTop: vh * 2,
    width: vw * 70,
    height: vh*6.5,
    borderRadius: vw * 3,
    borderWidth: 2,
    borderColor: 'rgba(219, 19, 62, 0.3)'
  },
  titleText: {
    marginTop: vh * 4,
    fontSize: fontSizes.f28,
    color: colors.black,
  },
  messageText: {
    fontSize: fontSizes.f12,
    marginTop: vh * 2,
    marginVertical: vh,
    color: colors.grayText,
  },
  headerContainer: {
    width: vw * 90,
    paddingTop: vw * 5,
    paddingRight: vw * 6,
    alignItems: 'flex-end',
  },
  crossBtn: {
    width: vw * 4.5,
    height: vw * 4.5,
  },
  modalIcon: {
    width: vw * 35,
    height: vw * 35,
  },
  iconStyle: {
    width: vw * 3,
    height: vw * 3,
  },
  selectCat: {
    fontSize: fontSizes.f12,
    color: colors.grayText,
  },
  confirmBtn: {
    width: vw * 35,
  },
  confirmBtnContainer: {
    flexDirection: 'row',
    marginTop: vh * 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn: {
    width: vw * 40,
    height: vh * 6.5,
    borderRadius: vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.themeColor
  },
  btn2: {
    marginLeft: vw * 3,
    width: vw * 28,
    height: vh * 6.5,
    borderRadius: vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.borderModal,
    borderWidth: 2,
  },
  btnText: {
      fontSize: fontSizes.f14,
      textAlign: "center",
      color: colors.white,
  },
  btnText2: {
    fontSize: fontSizes.f14,
    textAlign: "center",
    color: colors.borderModal,  
  },
  noBtn: {
    borderRadius: vw * 2,
    backgroundColor: colors.grayBackgroundColor,
  },
  headerBarLine: {
    width: vw * 16,
    height: vw * 0.3,
    marginTop: vh * 3,
    borderRadius: vh * 1,
    backgroundColor: colors.grayColor,
  },
  underline: {
    width: vw * 50,
    height: vw * 0.2,
    borderRadius: vh * 1,
    backgroundColor: colors.grayColor,
    alignSelf: 'center',
  },
  forgetPasswordButton: {
    marginTop: vh*4,
  },
  forgetPasswordTxt: {
    color: colors.themeColor,
    fontSize: fontSizes.f14,
    fontWeight: 'bold'
  },
});
