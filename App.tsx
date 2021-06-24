import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { useMedia } from './Utilities/Media';
import SplashScreen from './Components/SplashScreen';
import HomeScreen from './Components/HomeScreen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useCounter, CounterProvider } from './shared/context';

const App = () => {
  const height = useMedia().height;
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setPageLoaded(true), 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CounterProvider>
      <View style={styles.MainContainer}>
        <View
          style={[
            styles.ResponsiveContainer,
            {
              width: isMobile || Platform.OS === 'android' ? '100%' : 767,
            },
          ]}
        >
          {!pageLoaded ? <SplashScreen /> : <HomeScreen />}
        </View>
      </View>
    </CounterProvider>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: getStatusBarHeight(),
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  ResponsiveContainer: {
    flex: 1,
    alignSelf: 'center',
    height: '100%',
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
});

export default App;
