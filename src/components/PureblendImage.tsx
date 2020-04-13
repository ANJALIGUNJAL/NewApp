import React from 'react';
import {TextStyle, Image, View, ImageStyle} from 'react-native';
import {styles} from '../themes/styles';
type imageProps = {
  styles: ImageStyle;
  source: String | any;
};

export const ImageView = (props: imageProps) => {
  return <Image source={props.source} style={props.styles} />;
};
