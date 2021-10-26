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
});
