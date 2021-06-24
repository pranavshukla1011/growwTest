import React, { FC } from 'react';
import { useState } from 'react';
import {
  Pressable,
  View,
  Text,
  ImageBackground,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { IC_Correct, IC_Wrong } from '../Utilities/Icons';
import { StylesMain } from '../Utilities/Styles';
import type { State, Dispatch } from '../shared/context';

interface Props {
  id: number;
  style?: StyleProp<ViewStyle>;
  current: number;
  handler: Dispatch;
}

const ButtonItem: FC<Props> = ({ id, style, current, handler }) => {
  const [isChecked, setChecked] = useState(false);

  const found = isChecked && current === id;

  const onPress = () => {
    setChecked(true);
    handler('increment');
    if (current === id) {
      handler('over');
    }
  };
  return (
    <Pressable onPress={!isChecked ? onPress : () => {}} style={style}>
      {isChecked ? (
        found ? (
          <View>
            <ImageBackground
              source={IC_Correct}
              style={{ height: 60, width: 60 }}
              imageStyle={{ borderRadius: 50 }}
            ></ImageBackground>
          </View>
        ) : (
          <View>
            <ImageBackground
              source={IC_Wrong}
              style={{ height: 60, width: 60 }}
              imageStyle={{ borderRadius: 50 }}
            ></ImageBackground>
          </View>
        )
      ) : (
        <View
          style={[
            StylesMain.PaddingHorizontalExtraLarge,
            StylesMain.PaddingVerticalExtraLarge,
            styles.buttonUnchecked,
          ]}
        ></View>
      )}
    </Pressable>
  );
};

export default ButtonItem;

const styles = StyleSheet.create({
  buttonUnchecked: {
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  wrong: {
    backgroundColor: 'red',
  },
  correct: { backgroundColor: 'green', borderRadius: 20 },
});
