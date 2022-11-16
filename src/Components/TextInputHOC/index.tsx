import React from 'react';
import {TextInput} from 'react-native';
import {colors} from '../../Utils/theme';
import styles from './styles';

const TextInputHOC = props => {
  return (
    <TextInput
      placeholderTextColor={colors.grayColor4}
      underlineColorAndroid="rgba(0,0,0,0)"
      autoCapitalize="none"
      textAlignVertical="top"
      {...props}
      style={[styles.textInput, props?.style]}
    />
  );
};

export default TextInputHOC;