import React, {useRef, useImperativeHandle} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { vh, vw, fontSizes } from '../../../Utils/units';
import PopupWrapper from '../PopupWrapper';
import {generalImages} from '../../../Assets/images';
import { appShadow, colors } from '../../../Utils/theme';
import MontBold from '../../TextWrappers/MontBold';
import GradientButton from '../../GradientButton';
import MainButton from '../../MainButton';
import MontBook from '../../TextWrappers/MontBook';

const AlertPopup = props => {
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

        <LinearGradient style={styles.circleView} colors={props.colors ? props.colors : props.secondary ? [colors.white, colors.white] : [colors.themeColor, colors.themeColor]}
          {...(
            { 
              useAngle: true, 
              angle: 4, 
              angleCenter: { x: 0.5, y: 0.5 }
            }
          )}
        >
          <Feather
            name="alert-triangle"
            size={27}
            color={colors.white}
          />
          {/* <Image source={generalImages.checkWhite} style={styles.check} /> */}
        </LinearGradient>

        <MontBook style={styles.details}>{props.subTitle}</MontBook>

        <View style={styles.buttonsRow}>
          <GradientButton
            text={props.primaryTitle}
            style={styles.button}
            textStyle={{color: colors.white}}
            onPress={() => onYes()}
          />
          <MainButton 
            text={props.secondaryTitle}
            style={[styles.leftButton]}
            textStyle={{color: colors.grayColor}}
            onPress={() => accountPopup.current.hide()}
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
    fontSize: vh * 2.6,
  },
  button: {
    width: vw * 25,
    height: vh * 5.5,
    borderRadius: vw * 2,
    marginHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center'
    // ...appShadow
  },
  leftButton: {
    width: vw * 25,
    height: vh * 5.5,
    borderColor: colors.themeColor,
    borderWidth: 2,
    borderRadius: vw * 2,
    marginHorizontal: vw * 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    color: colors.lightBlack,
    textAlign: 'center',
    marginVertical: vh * 2,
    width: vw * 60,
    fontSize: fontSizes.f18
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: vh,
    marginBottom: vh*3.5,
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
    backgroundColor: colors.themeColor,
    borderRadius: (vw*16)/2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh*1.5
  },
  check: {
    width: vw*6,
    height: vw*6,
    resizeMode: 'contain'
  }
});
export default AlertPopup;
