import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: hp(80),
    paddingHorizontal: wp(4),
    paddingBottom: getBottomSpace() + wp(4),
    backgroundColor: 'white',
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  title: {
    fontFamily: 'Inter_700Bold',
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontFamily: 'Inter_400Regular',
    marginBottom: hp(1.5),
  },
  categoryCheckbox: {
    marginBottom: hp(1.5),
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: hp(2),
    paddingBottom: hp(0.5),
  },
  clearFilters: {
    marginTop: hp(1),
  },
});
