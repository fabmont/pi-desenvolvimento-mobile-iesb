import { StyleSheet } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: 'white',
    marginHorizontal: wp(4),
    marginBottom: wp(4),
    borderRadius: wp(2),
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
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
  },
  recipeTitle: {
    fontFamily: 'Inter_700Bold',
    color: '#FFF',
  },
  recipeOwner: {
    fontFamily: 'Inter_400Regular',
    color: '#FFF',
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
    fontFamily: 'Inter_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeLabel: {
    fontFamily: 'Inter_400Regular',
    marginLeft: 4,
    color: '#FFF',
  },
});
