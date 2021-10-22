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
    paddingBottom: hp(2),
    paddingTop: hp(1),
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginBottom: hp(1),
    fontFamily: 'Inter_700Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
  },
  searchInput: {
    flex: 1,
    marginHorizontal: wp(4),
    fontFamily: 'Inter_400Regular',
    justifyContent: 'center',
  },
  recipeCard: {
    elevation: 6,
    backgroundColor: 'white',
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(2),
  },
  cardImage: {
    height: hp(20),
    width: wp(25),
    borderRadius: wp(2),
  },
  filterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    marginTop: hp(2),
    marginRight: wp(2),
  },
  filterBadgeActive: {
    backgroundColor: '#FFAA00',
    borderColor: '#FFAA00',
  },
  filterBadgeText: {
    fontFamily: 'Inter_400Regular',
    color: '#424242',
  },
  filterBadgeTextActive: {
    color: '#FFF',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
