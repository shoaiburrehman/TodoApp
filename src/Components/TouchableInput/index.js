import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextInputHOC from '../TextInputHOC';
import OutfitRegular from '../TextWrappers/OutfitRegular';
import { vw } from '../../Utils/units';
import { generalIcons } from '../../Assets/images';
import MontRegular from '../TextWrappers/MontRegular';

export default TouchableInput = props => {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const handleIconPress = () => {
    if(props?.onPress){
      props.onPress();
    }
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
      <TouchableOpacity style={[styles.textInputContainer, props?.textInputContainer]} onPress={handleIconPress}>
        <MontRegular
          style={[
            styles.textInput,
            {width: getInputWidth()},
            props?.textInputStyle,
          ]}
        >
          {props?.value ? props?.value : props?.placeholder}
        </MontRegular>
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
          <View
            style={styles.iconContainer}
          >
            <Image
              source={props.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
