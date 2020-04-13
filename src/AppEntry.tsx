import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RootState} from './store';
import StackNavigator from './navigator/StackNavigation';
import {sampleDataState} from './store/reducers/sample/sampleReducer';

interface StateProps {
  data: sampleDataState;
}

type Props = StateProps;

const mapStateToProps = (states: RootState) => {
  return {
    data: states.sample,
  };
};

class AppEntry extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    ///console.log('sampledata', this.props.data);
    return <StackNavigator routeName={'home'} />;
  }
}

export default connect(mapStateToProps, null)(AppEntry);
