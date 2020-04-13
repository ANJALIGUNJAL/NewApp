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

interface DispatchProps {
  // setOnboarding: (routeName: string) => void;
}

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
  return {
    // setOnboarding: routeName => dispatch(setOnboarding(routeName)),
  };
};

class SampleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    //console.log('SAMPLEDATA', this.props.data.sampleData.data);
    return (
      <View style={SampleStyles.mainContainer}>
        <HeaderViewComponent
          type="dashboard"
          leftSource={<DrawerIcon />}
          onLeftHeaderClick={() => Alert.alert('dashboard')}
          text={'Dashboard'}
        />
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Welcome to Delivery App </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const SampleStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SampleScreen);
