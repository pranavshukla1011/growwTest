import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import ButtonItem from './ButtonItem';
import { StylesMain } from '../Utilities/Styles';
import { useCounter } from '../shared/context';
import { colors } from '../Utilities/Theme';
import { IMG_Bkg, IMG_Won } from '../Utilities/Images';

const PuzzleScreen = ({ input }: { input: number | null }) => {
  console.log('HomeScreen Loaded');
  function getRandomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [random, setRandom] = useState(getRandomBetween(1, 9));

  const { state, dispatch } = useCounter();

  return state.count >= 3 ? (
    <View
      style={[
        StylesMain.FlexColumnAllCenter,
        StylesMain.Inherit,
        { backgroundColor: colors.lost },
      ]}
    >
      <Text
        style={[StylesMain.Large, { color: colors.white, textAlign: 'center' }]}
      >
        {' '}
        You lose! Your number was {input} and hidden behind tile number {random}
      </Text>
    </View>
  ) : state.count === -1 ? (
    <View
      style={[
        StylesMain.FlexColumnAllCenter,
        StylesMain.Inherit,
        { backgroundColor: colors.won },
      ]}
    >
      <Image
        source={IMG_Won}
        style={[
          styles.imgStyle,
          StylesMain.MarginBottomMedium,
          StylesMain.BorderRadiusMedium,
        ]}
      ></Image>
      <Text
        style={[StylesMain.Large, { color: colors.white, textAlign: 'center' }]}
      >
        You Won! Congratulations! Your number was {input} and hidden behind tile
        number {random}
      </Text>
    </View>
  ) : (
    <ImageBackground source={IMG_Bkg} style={StylesMain.Inherit}>
      <View style={[StylesMain.FlexColumnAllCenter, StylesMain.Inherit]}>
        <Text
          style={[
            StylesMain.MarginBottomMedium,
            StylesMain.Large,
            { color: colors.white },
          ]}
        >
          Guess the number!
        </Text>
        <View style={StylesMain.MarginBottomMedium}>
          <View
            style={[
              StylesMain.FlexRowJustifyCenter,
              StylesMain.FlexRowAlignCenter,
            ]}
          >
            <ButtonItem id={1} current={random} handler={dispatch} />
            <ButtonItem
              id={2}
              style={StylesMain.MarginHorizontalMedium}
              current={random}
              handler={dispatch}
            />
            <ButtonItem id={3} current={random} handler={dispatch} />
          </View>
          <View
            style={[
              StylesMain.FlexRowJustifyCenter,
              StylesMain.FlexRowAlignCenter,
              StylesMain.MarginVerticalMedium,
            ]}
          >
            <ButtonItem id={4} current={random} handler={dispatch} />
            <ButtonItem
              id={5}
              style={StylesMain.MarginHorizontalMedium}
              current={random}
              handler={dispatch}
            />
            <ButtonItem id={6} current={random} handler={dispatch} />
          </View>
          <View
            style={[
              StylesMain.FlexRowJustifyCenter,
              StylesMain.FlexRowAlignCenter,
            ]}
          >
            <ButtonItem id={7} current={random} handler={dispatch} />
            <ButtonItem
              id={8}
              style={StylesMain.MarginHorizontalMedium}
              current={random}
              handler={dispatch}
            />
            <ButtonItem id={9} current={random} handler={dispatch} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PuzzleScreen;

const styles = StyleSheet.create({
  imgStyle: { height: 200, width: 200 },
});
