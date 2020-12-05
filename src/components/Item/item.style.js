import {StyleSheet} from 'react-native';
import {theme} from '../../assets/styles/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.grey,
    paddingVertical: 20,
  },
  date: {
    color: theme.white,
    fontFamily: theme.fontName,
    fontSize: theme.fontLarge,
    fontWeight: 'bold',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
    paddingTop: 2,
    paddingBottom: 15,
  },
  title: {
    color: theme.white,
    fontSize: theme.fontMedium,
    fontFamily: theme.fontName,
  },
  location: {
    fontSize: theme.fontNormal,
    color: theme.grey,
    marginVertical: 15,
    fontFamily: theme.fontName,
  },
  eventDetails: {
    color: theme.lightOrangeColor,
    marginVertical: 10,
    fontFamily: theme.fontName,
  },
  timeContainer: {
    alignSelf: 'flex-start',
  },
});

export default styles;
