import React, {useState} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
// import {BlurView} from '@react-native-community/blur';
import {useImperativeHandle} from 'react';
import { colors } from '../../../Utils/theme';
import { vh, vw } from '../../../Utils/units';

const PopupWrapper = props => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = onCancel => {
    setVisible(false);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  const show = onShow => {
    setVisible(true);
    if (typeof onShow === 'function') {
      onShow();
    } else {
      if (props.onShow) {
        props.onShow();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}>
      <View style={[styles.mainContainer, props?.mainContainer]}>
        <TouchableOpacity
          onPress={hide}
          activeOpacity={0.9}
          style={styles.backdropContainer}>
          {/* <BlurView blurType="light" style={styles.blur} /> */}
          <View style={styles.blur} />
        </TouchableOpacity>
        <View style={[styles.contentContainer, props?.containerStyle]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropContainer: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  blur: {
    height: 100 * vh,
    width: 100 * vw,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  contentContainer: {
    backgroundColor: colors.white,
    width: vw * 80,
    borderRadius: vh * 3,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
});
export default PopupWrapper;
