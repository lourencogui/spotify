import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary,
    paddingBottom: metrics.basePadding,
  },

  searchInput: {
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.secundary,
    height: 42,
    color: colors.white,
  },

  loading: {
    marginVertical: metrics.basePadding,
  },

});

export default styles;
