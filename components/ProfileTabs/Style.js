import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/Scaling';

export const profileTabStyle = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter',
    fontWeight: 700,
    padding: horizontalScale(4),
  },
  titlenotfocused: {
    color: '#79869F',
    fontWeight: 600,
  },
});
