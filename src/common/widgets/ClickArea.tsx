import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import {TColors} from "@/src/util/constants/colors/colors";
import {opacity} from "@/src/util/constants/colors/opacity";

// # --------------- Props --------------- #
interface Props {
  style?: object;
  children: React.ReactNode;
  radius?: number;
  onPress?: void;
}

// # --------------- UIClickArea --------------- #
export const UIClickArea: React.FC<Props> = ({
  children,
  radius = 6,
  onPress,
  style,
}) => {
  return (
    <TouchableHighlight
      style={[{ borderRadius: radius }, style]}
      underlayColor={opacity(TColors.black, 20)}
      onPress={() => onPress}>
      {children}
    </TouchableHighlight>
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({});
