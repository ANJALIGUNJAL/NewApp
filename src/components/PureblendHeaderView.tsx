import React, {Component} from 'react';
import {View, Text, Image, ImageStyle, TouchableOpacity} from 'react-native';

import {styles} from '../themes/styles';
interface headerProps {
  type: 'dashboard' | 'normal';
  leftSource: Element;
  middleSource?: Element;
  rightSource?: Element;
  text: String | any;
  onLeftHeaderClick?: Function | any;
  onRightHeaderClick?: Function | any;
  onSearchClicked?: Function | any;
}
const HeaderViewComponent = (props: headerProps) => {
  return (
    <View style={styles.headerInputView}>
      <TouchableOpacity
        style={styles.headerIconView}
        onPress={props.onLeftHeaderClick}>
        {props.leftSource}
      </TouchableOpacity>
      <View style={styles.headerTextView}>
        <Text style={styles.headerTexts}>{props.text}</Text>
      </View>
      {props.type === 'dashboard' ? (
        <TouchableOpacity
          style={styles.headerIconView}
          onPress={props.onSearchClicked}>
          {props.middleSource}
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={styles.headerIconView}
        onPress={props.onRightHeaderClick}>
        {props.rightSource}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderViewComponent;
