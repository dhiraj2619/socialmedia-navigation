import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/Scaling';

const profileStyle = StyleSheet.create({
  imgBorder: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(110),
    padding: horizontalScale(5),
  },
  profileImage: {
    height: horizontalScale(110),
    width: horizontalScale(110),
  },
  profileText: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 700,
  },
  followCount: {
    fontSize: 18,
    color: '#000',
    fontWeight: 700,
  },
  profileContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(20),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
    flexDirection: 'row',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default profileStyle;
