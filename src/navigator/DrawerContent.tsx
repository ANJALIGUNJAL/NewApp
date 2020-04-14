import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Alert,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkgrey, lightgrey, grey, primary} from '../themes/color';
import Logo from '../assets/DrawerIcon';
import {Women} from '../assets/SVG';
import {OpenSansSemiBold, OpenSansRegular} from '../themes/config';
import {Home, Order, Help, Logout, DrawerIcon} from '../assets/SVG';
import {RootState} from '../store';
import {connect, DispatchProp} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThunkDispatch} from 'redux-thunk';

class DrawerContent extends Component<any> {
  constructor(props: any) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      expand: false,
    };
  }

  route = (screen: string) => {
    var array = {};
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.drawerContent}>
          <ImageBackground
            style={styles.imageBackgroundStyle}
            resizeMethod={'resize'}
            resizeMode={'contain'}
            source={require('../assets/drawerLogo.png')}
          />
        </View>
        <SafeAreaView style={{flex: 1, zIndex: 999}}>
          <View style={styles.headerViewStyle}>
            <View style={styles.profileImage}>{/* <Logo /> */}</View>
            <View
              style={{
                justifyContent: 'center',
                marginStart: 10,
              }}>
              <Text style={[styles.nameText, {fontFamily: OpenSansRegular}]}>
                Hello,
              </Text>
              <Text style={[styles.nameText, {fontFamily: OpenSansSemiBold}]}>
                John Doe
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.route('home')}
            style={styles.item}>
            <Home />
            <Text style={styles.itemText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.route('OrderView')}
            style={styles.item}>
            <Order />
            <Text style={styles.itemText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Help />
            <Text style={styles.itemText}>Help / Support</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.item,
              {bottom: '5%', position: 'absolute', zIndex: 9},
            ]}>
            <Logout />
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() =>
                Alert.alert(
                  'Logout',
                  'Are you sure you want to logout',
                  [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'YES', onPress: () => console.log('h')},
                  ],
                  {cancelable: false},
                )
              }>
              <Text style={styles.itemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    height: '100%',
    width: '100%',
    marginTop: 25,
  },
  drawerContent: {
    width: '50%',
    height: '85%',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    bottom: 0,
  },
  profileImage: {
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    backgroundColor: primary,
  },
  headerViewStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: grey,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 25,
  },
  nameText: {
    color: darkgrey,
    fontFamily: OpenSansSemiBold,
    fontSize: hp('1.8%'),
  },
  itemText: {
    color: darkgrey,
    textAlignVertical: 'center',
    fontFamily: OpenSansSemiBold,
    fontSize: hp('1.8%'),
    textAlign: 'center',
    marginLeft: '8%',
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: '5.5%',
    marginTop: 20,
  },
});
export default DrawerContent;
