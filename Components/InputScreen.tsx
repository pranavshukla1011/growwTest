import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ImageBackground,
} from 'react-native';
import { View, Text } from 'react-native';
import { IMG_Bkg } from '../Utilities/Images';
import { StylesMain } from '../Utilities/Styles';
import { colors } from '../Utilities/Theme';
import PuzzleScreen from './PuzzleScreen';
const InputScreen = () => {
  const [input, setInput] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [alert, setAlert] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const onChangeText = (val) => {
    setInput(val);
  };

  const onSubmit = () => {
    if (isNaN(input)) {
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);
    } else {
      setSubmit(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ImageBackground source={IMG_Bkg} style={StylesMain.Inherit}>
      <View style={StylesMain.Inherit}>
        {showIntro ? (
          <View style={[StylesMain.FlexColumnAllCenter, StylesMain.Inherit]}>
            <Text
              style={[
                { textAlign: 'center', color: colors.white },
                StylesMain.Large,
                StylesMain.PaddingHorizontalMedium,
                StylesMain.PaddingVerticalSmall,
              ]}
            >
              Choose your number
            </Text>
          </View>
        ) : submit ? (
          <PuzzleScreen input={input} />
        ) : (
          <View style={[StylesMain.FlexColumnAllCenter, StylesMain.Inherit]}>
            {alert ? (
              <Text
                style={[
                  { textAlign: 'center', color: colors.lost },
                  StylesMain.Small,
                  StylesMain.PaddingHorizontalMedium,
                  StylesMain.PaddingVerticalSmall,
                ]}
              >
                Input should be a number!!
              </Text>
            ) : null}
            <TextInput
              style={[
                styles.InputFieldStyle,
                StylesMain.PaddingHorizontalLarge,
                StylesMain.PaddingVerticalSmall,
                StylesMain.MarginBottomMedium,
                {
                  color: colors.white,
                  borderBottomColor: isFocused ? '#B5B5B5' : '#E3E3E3',
                },
              ]}
              onChangeText={onChangeText}
              placeholder={'Enter Your Number'}
              placeholderTextColor={'#D7D7D7'}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
            <Text
              onPress={onSubmit}
              style={[
                StylesMain.Medium,
                StylesMain.PaddingHorizontalMedium,
                StylesMain.PaddingVerticalSmall,
                StylesMain.BorderRadiusMedium,
                { color: colors.white, backgroundColor: colors.orange },
              ]}
            >
              Submit
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  InputFieldStyle: {
    borderBottomWidth: 1,
    height: 50,
  },
});
