import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import OutfitRegular from '../TextWrappers/OutfitRegular';
import { vw } from '../../Utils/units';
import MontRegular from '../TextWrappers/MontRegular';
import { styles } from './styles';

interface Props {
  onPress: () => void,
  style: object,
  title: string,
  secureTextEntry: boolean,
  titleTextStyle: object,
  notRequired: boolean,
  textInputContainer: object,
  textInputStyle: object,
  value: string,
  placeholder: string,
  icon: any,
}


export const TouchableInput = (props: Props) => {
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
