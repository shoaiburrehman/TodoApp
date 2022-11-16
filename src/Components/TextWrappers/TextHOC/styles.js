import {StyleSheet} from 'react-native';
import fonts from '../../../Assets/fonts';
import { colors } from '../../../Utils/theme';
import { vw } from '../../../Utils/units';

export default StyleSheet.create({
  text: {
    fontSize: vw * 3.5,
    fontWeight: fonts.fontWeightNormal,
    color: colors.black
  },
});
