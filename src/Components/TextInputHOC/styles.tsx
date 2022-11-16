import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/theme';
import {vh, vw} from '../../Utils/units';

const styles = StyleSheet.create({
  textInput: {
    width: vw * 72,
    height: vh * 6.5,
    color: colors.grayColor,
    // alignSelf: 'center',
    // fontFamily: fonts.Eurostile.Bold,
  },
});

export default styles;