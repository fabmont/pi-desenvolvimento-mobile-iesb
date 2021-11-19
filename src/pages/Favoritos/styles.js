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
  header: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginBottom: hp(1),
    fontFamily: 'Inter_700Bold',
  },
});
