import React from 'react';
import {Text, TextStyle} from 'react-native';

interface smallTextProps {
  styles?: TextStyle | any;
  text: string | any;
}

export const SmallText = (props: smallTextProps | any) => {
  return <Text style={props.styles}>{props.text}</Text>;
};
