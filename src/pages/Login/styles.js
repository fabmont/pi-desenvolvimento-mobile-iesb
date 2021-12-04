import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: '100%',
    height: hp(42),
  },
  body: {
    flex: 1,
    paddingHorizontal: wp(4),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    marginBottom: hp(2),
    width: '100%',
  },
  inputs: {
    marginBottom: hp(2),
  },
  loginBtn: {
    marginTop: hp(2),
    marginBottom: hp(3),
    width: '100%',
  },
  signupLabel: {
    fontFamily: 'Inter_400Regular',
    width: '100%',
    textAlign: 'center',
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
