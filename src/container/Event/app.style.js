import {StyleSheet} from 'react-native';
import {theme} from '../../assets/styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.darkColor,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  messageBtn: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: theme.lightOrangeColor,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  messageIcon: {
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    backgroundColor: theme.white,
    padding: 5,
    width: '30%',
    textAlign: 'center',
    letterSpacing: 3,
  },
});

export default styles;
