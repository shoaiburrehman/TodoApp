import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../Utils/theme";

interface Props {
    style: {},
    onPress?: () => void,
    textStyle: {},
    text: string
}

const GradientButton: React.FC<Props> = (props: Props) => {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={colors.gradientBtnColor} style={props.style}>
                <Text style={props.textStyle}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientButton;