import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {sampleDataState} from '../store/reducers/sample/sampleReducer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderViewComponent from '../components/PureblendHeaderView';
import {DrawerIcon, RightArrow} from '../assets/SVG';
import {
  OpenSansBold,
  OpenSansRegular,
  OpenSansSemiBold,
} from '../themes/config';
import {styles} from '../themes/styles';

interface DispatchProps {}

interface cartItemProps {
  navigation: StackNavigationProp<any>;
}

interface cartItemState {
  data: sampleDataState;
}

type Props = cartItemProps & cartItemState;

const mapStateToProps = (states: RootState) => {
  return {
    data: states.sample,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): DispatchProps => {
  return {};
};

class SampleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderViewComponent
          type="dashboard"
          leftSource={<DrawerIcon />}
          text={'Dashboard'}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NextComponent')}
          style={styles.textStyle}>
          <Text
            style={{
              fontFamily: OpenSansBold,
              alignItems: 'center',
            }}>
            Take me to Next Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const SampleStyles = StyleSheet.create({});
export default connect(mapStateToProps, mapDispatchToProps)(SampleScreen);
