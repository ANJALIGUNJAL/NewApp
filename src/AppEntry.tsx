import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {RootState} from './store';
import StackNavigator from './navigator/StackNavigation';
// import {OnboardingState} from './store/reducers/onboarding/onboardingReducer';

// interface StateProps {
//   data: OnboardingState;
// }

// type Props = StateProps;

// const mapStateToProps = (states: RootState) => {
//   return {
//     data: states.onboarding,
//   };
// };

class AppEntry extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <StackNavigator routeName={'home'} />;
  }
}

export default AppEntry;
