import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    Image,
    View
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../Utils/theme";
import { vh } from "../../Utils/units";

const MainButton = (props) => {
    
    if(props?.active == false){
        return (
            <View style={props.style}>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        );
    }
    else{
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default MainButton;