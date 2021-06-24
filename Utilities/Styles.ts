import { StyleSheet } from 'react-native';

export const StylesMain = StyleSheet.create({
  Large: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  Inherit: {
    height: '100%',
    width: '100%',
  },
  FlexRowAllCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlexRowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  FlexRowJustifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FlexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlexColumnAllCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  MarginBottomMedium: {
    marginBottom: 16,
  },
  MarginBottomExtraLarge: {
    marginBottom: 32,
  },
  MarginHorizontalMedium: {
    marginHorizontal: 16,
  },
  MarginVerticalMedium: {
    marginVertical: 16,
  },
  PaddingBottomMedium: {
    paddingBottom: 16,
  },
  PaddingTopMedium: {
    paddingTop: 16,
  },
  PaddingHorizontalMedium: {
    paddingHorizontal: 16,
  },
  PaddingVerticalMedium: {
    paddingVertical: 16,
  },
  PaddingHorizontalLarge: {
    paddingHorizontal: 32,
  },
  PaddingVerticalLarge: {
    paddingVertical: 32,
  },
});
