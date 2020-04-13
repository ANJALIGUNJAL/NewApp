import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  red,
  grey,
  primary,
  lightgrey,
  darkgrey,
  facebook,
} from '../themes/color';
import {
  OpenSansSemiBold,
  OpenSansBold,
  OpenSansRegular,
  RobotoRegular,
} from '../themes/config';
import {greyshade} from './color';
export const styles = StyleSheet.create({
  headerInputView: {
    width: '100%',
    borderBottomColor: greyshade,
    borderBottomWidth: 1,
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 50,
  },
  headerIconView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  headerTexts: {
    fontSize: hp('2.2%'),
    color: primary,
    fontFamily: OpenSansSemiBold,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
