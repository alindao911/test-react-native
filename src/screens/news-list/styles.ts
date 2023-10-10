import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  newsContainer: {
    margin: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newsDetailsContainer: {
    width: '80%',
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  newsScore: {
    backgroundColor: colors.red,
    textAlign: 'center',
    color: colors.white,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  newsLink: {
    paddingBottom: 5,
  },
  newsThreadCountContainer: {
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsThreadCount: {
    color: colors.red,
    fontWeight: 'bold',
  },
  listSeparator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
});
