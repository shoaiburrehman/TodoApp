import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    Image,
    View
} from "react-native";

interface Props {
    style: {},
    onPress?: () => void,
    textStyle: {},
    text: string,
    active: boolean,
}

const MainButton: React.FC<Props> = (props: Props) => {    
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