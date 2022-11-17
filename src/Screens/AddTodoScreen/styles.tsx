import {
  StyleSheet,
} from 'react-native';
import { colors } from '../../Utils/theme';
import { fontSizes, vh, vw } from '../../Utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
  },

  contactImgView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw * 7,
  },

  contactImg: {
    width: vw * 70,
    height: vw * 50,
    resizeMode: 'contain',
  },

  btn: {
    marginVertical: vh * 2.5,
    width: vw * 80,
    height: vh * 8,
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.themeColor
  },
  btnText: {
      fontSize: fontSizes.f14,
      textAlign: "center",
      color: colors.white,
  },

  content: {
    alignItems: 'center',
  },

  scroll: {
    flex: 1,
  },

  fieldsView:{
    marginHorizontal: vw * 7,
    marginVertical: 3 * vh
  },

  messageView:{
    backgroundColor: 'red',
  },

  textInputStyle: {
    height: vh * 17,
  },
  sendButtonStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 45 * vw,
    marginTop: 5 * vh
  }
});

export default styles;
