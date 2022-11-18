import {StyleSheet, Platform} from 'react-native';
import {appShadow, colors} from '../../Utils/theme';
import {DEVICE_WIDTH, fontSizes, vh, vw} from '../../Utils/units';

export default StyleSheet.create({
  headerStyle: {
    height: 13 * vh,
    backgroundColor: colors.themeColor,
    shadowColor: colors.themeColor,
    elevation: 0,
    shadowOpacity: 0,
  },
  menu: {
    width: vw * 5,
    height: vh * 4,
    marginLeft: 3 * vw,
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 9,
    height: vw * 9,
    marginLeft: vw * 3,
  },
  touchableMenu: {
    width: 9 * vw,
    height: 9 * vw,
    marginLeft: vw * 2,
    zIndex: 9999,
  },
  menuIcon: {
    width: 9 * vw,
    height: 9 * vw,
    resizeMode: 'contain',
    zIndex: 9999,
  },
  backArrow: {
    width: 4 * vw,
    height: 4 * vw,
    resizeMode: 'contain',
    tintColor: colors.white
  },

  notificationIcon: {
    width: 5 * vw,
    height: 4 * vh,
    resizeMode: 'contain',
    marginLeft: 4 * vw,
  },
  likeBlank: {
    width: vw * 5.5,
    height: vh * 4,
    resizeMode: 'contain',
  },
  otherHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherHeaderView2: {
    alignItems: 'center',
  },
  realMad: {
    marginHorizontal: vw * 4,
    width: vw * 11,
    height: vw * 11,
    resizeMode: 'contain'
  },
  headerText: {
    fontSize: fontSizes.f20 * 1.1,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: vw * 5,
  },
  headerText1: {
    fontSize: fontSizes.f16,
    color: colors.grayColor
  },
  statusText: {
    fontSize: vw * 4,
  },
  // imageBackground: {
  //   overflow: 'hidden',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   width: vw * 110,
  //   height: vh * 15
  // }
  imageBackground: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 16,
    width: DEVICE_WIDTH,
    borderWidth: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: vw * 2,
  },
  notifCount: {
    position: 'absolute',
    bottom: vh * 2,
    right: vw * 3,
    width: vw * 3.8,
    height: vw * 3.8,
    borderRadius: (vw * 3.8) / 2,
    backgroundColor: colors.themeColor,
    borderColor: colors.black,
    borderWidth: 1.4,
    zIndex: 9999,
  },
  notifCountTxt: {
    alignSelf: 'center',
    fontSize: fontSizes.f10,
    color: colors.white,
  },
  userIcon: {
    width: vw * 12,
    height: vw * 12,
    borderRadius: (vw * 12) / 2,
  },
  online: {
    position: 'absolute',
    bottom: vw,
    right: vw,
    width: vw * 2.5,
    height: vw * 2.5,
    borderRadius: (vw * 2.5) / 2,
    backgroundColor: colors.onlineColor,
    borderColor: colors.black,
    borderWidth: 1.2,
  },
  notifStar: {
    height: vh * 3,
    resizeMode: 'contain',
  },
});
