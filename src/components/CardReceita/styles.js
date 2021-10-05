import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    marginHorizontal: wp(4),
    marginBottom: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(2),
  },
  cardImage: {
    height: '100%',
    width: wp(25),
    borderRadius: wp(2),
    backgroundColor: '#f1f1f1',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: wp(5),
  },
  recipeTitle: {
    fontFamily: 'Inter_500Medium',
    color: '#424242',
  },
  recipeOwner: {
    opacity: 0.4,
    fontFamily: 'Inter_400Regular',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
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
    marginLeft: 4,
    fontFamily: 'Inter_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
