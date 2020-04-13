import React from 'react';
import {Text, TextStyle,View,TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {SmallText} from '../components/PureblendTexts';
import {styles} from '../themes/styles';

type smallButtonsProps={
title:String|any;
textStyle?:TextStyle;
}
export const SmallButton = (props: TouchableOpacityProps & smallButtonsProps) => {
      return (
        <TouchableOpacity {...props}>
<Text style={props.textStyle} >{props.title}</Text>
        </TouchableOpacity>
    );
};


