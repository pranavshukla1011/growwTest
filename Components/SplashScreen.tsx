import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { IMG_SplashBackground } from '../Utilities/Images';
import { StylesMain } from '../Utilities/Styles';
import { useMedia } from '../Utilities/Media';
import { colors } from '../Utilities/Theme';

interface State {
  loadingString: string;
  fontSize: number;
}

const SplashScreen = () => {
  const height = useMedia().height;
  const width = useMedia().width;

  const [state, setState] = useState<State>({
    loadingString: 'Get',
    fontSize: 32,
  });

  useEffect(() => {
    const timer = setTimeout(
      () => setState({ loadingString: 'Set', fontSize: 60 }),
      2000
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => setState({ loadingString: 'GO!', fontSize: 100 }),
      3000
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={{ height: height, width: width }}>
      <ImageBackground source={IMG_SplashBackground} style={StylesMain.Inherit}>
        <View
          style={[
            StylesMain.Inherit,
            StylesMain.FlexRowAllCenter,
            StylesMain.PaddingTopMedium,
          ]}
        >
          <Text
            style={[
              {
                color: colors.white,
                fontWeight: 'bold',
                fontSize: state.fontSize,
              },
            ]}
          >
            {state.loadingString}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
