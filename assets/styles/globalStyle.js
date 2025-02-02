import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  bgWhite: {
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  flexgrow: {
    flexGrow: 1,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  flexrow: {
    flexDirection: 'row',
  },
  flexcol: {
    flexDirection: 'column',
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  pt30: {
    paddingTop: 30,
  },
  large: {
    fontSize: 18,
  },
  small: {
    fontSize: 14,
    color: '#79869F',
  },
});

export default globalStyles;
