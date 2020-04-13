import React from 'react';
import {
  Text,
  TextStyle,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {SmallText} from '../components/PureblendTexts';
interface fullButtonsProps {
  title: String | any;
  textStyle?: TextStyle;
}
export const FullButton = (props: TouchableOpacityProps & fullButtonsProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
