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
  headerContainer: {
    flexDirection: 'row',
    marginVertical: hp(2),
    paddingHorizontal: wp(3),
  },
  avatar: {
    width: wp(24),
    height: wp(24),
    marginRight: wp(3),
  },
  userInfoBox: {
    justifyContent: 'center',
    flex: 1,
  },
  userInfoText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    opacity: 0.7,
    marginBottom: hp(0.5),
  },
  userName: {
    fontFamily: 'Inter_700Bold',
    marginBottom: hp(0.5),
  },
  bioBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    paddingHorizontal: wp(3),
    paddingBottom: hp(2),
    marginBottom: hp(2),
  },
});
