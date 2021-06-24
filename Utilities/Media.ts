import { useWindowDimensions } from 'react-native';

export type MediaQueryType = {
  height: number;
  width: number;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  largeScreen: boolean;
};

export const useMedia = (): MediaQueryType => {
  const windowDimensions = useWindowDimensions();
  const width = windowDimensions.width;
  const height = windowDimensions.height;

  function computeMedia(width: number, height: number) {
    return {
      width: width,
      height: height,
      mobile: width < 767,
      tablet: width >= 767 && width < 992,
      desktop: width >= 992 && width < 1224,
      largeScreen: width >= 1224,
    };
  }

  return computeMedia(width, height);
};
