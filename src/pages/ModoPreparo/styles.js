import { StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace() + hp(2),
  },
  body: {
    paddingHorizontal: wp(4),
    alignItems: 'center',
  },
  coverImg: {
    height: hp(30),
    width: '100%',
    borderRadius: wp(5),
    marginTop: wp(4),
  },
  title: {
    fontFamily: 'Inter_700Bold',
    marginTop: hp(2),
  },
  ownerText: {
    fontFamily: 'Inter_400Regular',
    opacity: 0.4,
    marginTop: hp(0.5),
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 170, 0, 0.17)',
    borderRadius: wp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
    marginRight: wp(2),
  },
  timeBadgeText: {
    color: '#FFAA00',
    marginLeft: 4,
    fontFamily: 'Inter_400Regular',
  },
  difficultyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 224, 150, 0.3)',
    borderRadius: wp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
  },
  difficultyBadgeText: {
    color: '#01885B',
    fontFamily: 'Inter_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  section: {
    padding: wp(3),
    backgroundColor: '#f5f5f5',
    width: '100%',
    alignItems: 'center',
    borderRadius: wp(2),
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: 'Inter_400Regular',
    opacity: 0.6,
  },
  stepIndex: {
    fontFamily: 'Inter_700Bold',
    color: '#FFAA00',
  },
  ingredientItem: {
    fontFamily: 'Inter_400Regular',
  },
});
