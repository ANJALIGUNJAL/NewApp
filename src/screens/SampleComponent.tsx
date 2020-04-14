import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {sampleDataState} from '../store/reducers/sample/sampleReducer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderViewComponent from '../components/PureblendHeaderView';
import {DrawerIcon} from '../assets/SVG';
import {
  OpenSansBold,
  OpenSansRegular,
  OpenSansSemiBold,
} from '../themes/config';

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
      <View style={SampleStyles.mainContainer}>
        <HeaderViewComponent
          type="dashboard"
          leftSource={<DrawerIcon />}
          onLeftHeaderClick={() => this.props.navigation.toggleDrawer()}
          text={'Dashboard'}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: OpenSansBold,
            }}>
            Welcome to Delivery App
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const SampleStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SampleScreen);
