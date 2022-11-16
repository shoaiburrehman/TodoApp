import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../Utils/theme";
import { vh } from "../../Utils/units";

const GradientButton = (props) => {

    const [isIcon, setIcon] = useState(props.isIcon || false)
    
    if(isIcon == true){
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={colors.gradientBtnColor} style={props.style}>
                    <Image style={props.imgStyle} source={props.icon} />
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    if(props.text === "+"){
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={colors.gradientBtnColor} style={[props.style, {borderRadius: vh * 30}]} onPress={props.onPress}>
                    <Text style={props.textStyle}>{props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )            
    }
    else{
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={colors.gradientBtnColor} style={props.style}>
                    <Text style={props.textStyle}>{props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

export default GradientButton;