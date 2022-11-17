import React, {useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { vh, vw, fontSizes } from '../../../Utils/units';
import PopupWrapper from '../PopupWrapper';
import {useImperativeHandle} from 'react';
import { appShadow, colors } from '../../../Utils/theme';
import MontBold from '../../TextWrappers/MontBold';
import GradientButton from '../../GradientButton';

const ResponsePopup = props => {
  let accountPopup = useRef(null);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    accountPopup?.current?.show();
  };

  const hide = () => {
    accountPopup?.current?.hide();
  };

  const onYes = () => {
    if (props?.onAccept) {
      props?.onAccept();
    }

    hide();
  };

  return (
    <PopupWrapper reference={accountPopup}>
      <View style={{alignItems: 'center', paddingTop: vh * 2}}>
        <TouchableOpacity style={styles.crossTouchable} onPress={() => hide()}>
          <Feather
            name="x"
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>
        {!props?.noIcon ?
          <LinearGradient style={styles.circleView} colors={[colors.themeColor, colors.themeColor]}
            {...(
              { 
                useAngle: true, 
                angle: 4, 
                angleCenter: { x: 0.5, y: 0.5 }
              }
            )}
          >
            <Feather
              name="check"
              size={27}
              color={colors.white}
            />
          </LinearGradient>

          :

          <MontBold style={styles.heading}>{props?.title}</MontBold>
        }
        <MontBold style={styles.details}>{props.subTitle}</MontBold>

        <View style={styles.buttonsRow}>
          <GradientButton
            text={props.primaryTitle}
            style={styles.button}
            textStyle={{color: colors.white}}
            onPress={() => onYes()}
          />
        </View>
      </View>
    </PopupWrapper>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    height: 15 * vw,
    width: 15 * vw,
  },
  heading: {
    marginTop: vh*1.5,
    fontSize: vh * 2.6,
  },
  button: {
    width: vw * 25,
    height: vh * 5.5,
    borderRadius: vw * 2,
    marginHorizontal: vw * 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButton: {
    width: vw * 26,
    height: vh * 4,
    marginHorizontal: vw * 3,
    backgroundColor: colors.grayButton,
    borderWidth: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  details: {
    color: colors.lightBlack,
    textAlign: 'center',
    marginVertical: vh * 2,
    width: vw * 60,
    fontSize: fontSizes.f20
  },
  buttonsRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh,
    marginBottom: 4 * vh,
  },
  crossTouchable: {
    width: vw*5,
    height: vw*5,
    position: 'absolute',
    right: vw*5,
    top: vw*5,
    zIndex: 9999
  },
  cross: {
    width: vw*3,
    height: vw*3,
  },
  circleView: {
    width: vw*16,
    height: vw*16,
    backgroundColor: colors.primaryGreen,
    borderRadius: (vw*16)/2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh*1.5
  },
  check: {
    width: vw*8,
    height: vw*8,
    resizeMode: 'contain',
  }
});
export default ResponsePopup;
