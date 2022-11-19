import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator, Modal, View} from 'react-native';
import { vh, vw } from '../../Utils/units';
import { colors } from '../../Utils/theme';

const Loader = props => {
  let isLoading;
  if (props?.loading) {
    isLoading = props?.loading;
  } else {
    isLoading = useSelector(state => state.todoReducer.loading);
  }
  return (
    <Modal
      animationType="slide"
      style={{flex: 1}}
      transparent={true}
      visible={isLoading}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: 100 * vh,
          width: 100 * vw,
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
        <ActivityIndicator size="large" color={colors.themeColor} />
      </View>
    </Modal>
  );
};

export default Loader;
