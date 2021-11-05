import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  inputs: {
    marginBottom: hp(2),
  },
  submitBtn: {
    width: '100%',
    marginTop: hp(2),
  },
  alertbox: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FF6D63',
    borderRadius: wp(2),
    padding: wp(4),
    marginBottom: hp(2),
  },
  alertboxText: {
    fontFamily: 'Inter_400Regular',
    color: 'white',
  },
});
