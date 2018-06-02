import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    ...ifIphoneX({
      height: 74,
      paddingBottom: metrics.basePadding,
    }, {
        height: 54,
      }),
  },

  currentSong: {
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: 16,
  },

  author: {
    color: colors.dark,
    fontSize: 12,
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  controlIcon: {
    color: colors.white,
  },

  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
});

export default styles;
