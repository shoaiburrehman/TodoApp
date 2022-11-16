import {StyleSheet} from 'react-native';
import {colors} from '../Utils/theme';
import {vw, vh, fontSizes} from '../Utils/units';

const styles = StyleSheet.create({
  iconStyle: {
    width: vw * 5.5,
    height: vw * 5.5,
    resizeMode: 'contain',
  },
  tabBarBackground: {
    backgroundColor: '#2B3047',
  },
  customTabView: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 14,
    height: vw * 14,
    borderRadius: (vw * 14) / 2,
  },
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 20,
    height: vh * 9
  },
  tabIcon: {
    width: vw * 6,
    height: vw * 6,
    resizeMode: 'contain',
  },
  tabBottom: {
    position: 'absolute',
    top: vh * 5.5,
    width: vw * 10,
    height: vw * 10,
    resizeMode: 'contain',
  },
  tabLabel: {
    color: colors.white,
    fontSize: fontSizes.f8 * 1.1,
    marginTop: vw,
  },
});

export default styles;
