import { StyleSheet } from 'react-native';

export const StylesMain = StyleSheet.create({
  Small: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Medium: {
    fontSize: 24,
    fontWeight: 'bold',
  },
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
  PaddingHorizontalExtraLarge: {
    paddingHorizontal: 32,
  },
  PaddingVerticalExtraLarge: {
    paddingVertical: 32,
  },
  PaddingHorizontalLarge: {
    paddingHorizontal: 24,
  },
  PaddingVerticalSmall: {
    paddingVertical: 12,
  },
  BorderRadiusMedium: {
    borderRadius: 20,
  },
});
