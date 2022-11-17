import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../Utils/theme";
import { vh } from "../../Utils/units";

const MainButton = (props) => {

    const [isIcon, setIcon] = useState(props.isIcon || false)
    
    if(isIcon == true){
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <Image style={props.imgStyle} source={props.icon} />
            </TouchableOpacity>
        );
    }
    if(props.text === "+"){
        return (
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        )            
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