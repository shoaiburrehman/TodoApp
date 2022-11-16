import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextInputHOC from '../TextInputHOC';
import OutfitRegular from '../TextWrappers/OutfitRegular';
import { vw } from '../../Utils/units';
import { generalIcons } from '../../Assets/images';

export default InputField = props => {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const handleIconPress = () => {
    props.onPress();
  }

  const getInputWidth = () => {
    let width = vw * 72;

    if (props.secureTextEntry) {
      width -= vw * 10;
    }

    return width;
  };

  return (
    <View style={[styles.container, props?.style]}>
      {props?.title && (
        <OutfitRegular
          style={[styles.titleText, props.titleTextStyle]}>
          {props?.title}{' '}
          {props?.notRequired ? null : (
            <OutfitRegular style={styles.starStyle}>
              *
            </OutfitRegular>
          )}
        </OutfitRegular>
      )}
      <View style={[styles.textInputContainer, props?.textInputContainer]}>
        <TextInputHOC
          {...props}
          style={[
            styles.textInput,
            {width: getInputWidth()},
            props?.textInputStyle,
          ]}
          secureTextEntry={props.secureTextEntry && !isShow}
          authInput
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handlePassword}>
            <Image
              source={isShow ? generalIcons.passShow : generalIcons.passHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {props.valid && (
          <View
            style={styles.iconContainer}
          >
            <Image
              source={generalIcons.checkedPlane}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}

        {props.icon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleIconPress}>
            <Image
              source={props.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
