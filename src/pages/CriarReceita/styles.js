import { StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace(),
  },
  body: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  input: {
    marginBottom: hp(3),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    padding: wp(3),
    backgroundColor: '#f5f5f5',
    width: '100%',
    alignItems: 'center',
    borderRadius: wp(2),
    marginBottom: hp(0.5),
  },
  sectionText: {
    fontFamily: 'Inter_400Regular',
    opacity: 0.6,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  submitBtn: {
    borderRadius: 0,
    marginTop: hp(2),
  },
});
