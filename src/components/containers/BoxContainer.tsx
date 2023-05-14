import React, {FC, PropsWithChildren} from 'react';
import {FlexStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../../theme';

export type spacingType = [number, number?, number?, number?];

export interface IBoxContainerProps extends PropsWithChildren {
  margins?: spacingType;
  paddings?: spacingType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BoxContainer: FC<IBoxContainerProps> = ({
  style,
  children,
  margins,
  paddings,
  onPress,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles(margins, paddings).box, style]}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles(margins, paddings).box, style]}>{children}</View>;
};

const calculateMargins = (margins?: spacingType): FlexStyle => {
  const computedMargin = margins?.filter(val => val !== undefined) || [];
  const baseMargin = theme.grid.base4;

  switch (computedMargin.length) {
    case 1:
      return {margin: baseMargin * computedMargin[0]!};
    case 2:
      return {
        marginVertical: baseMargin * computedMargin[0]!,
        marginHorizontal: baseMargin * computedMargin[1]!,
      };
    case 3:
      return {
        marginTop: baseMargin * computedMargin[0]!,
        marginHorizontal: baseMargin * computedMargin[1]!,
        marginBottom: baseMargin * computedMargin[2]!,
      };
    case 4:
      return {
        marginTop: baseMargin * computedMargin[0]!,
        marginRight: baseMargin * computedMargin[1]!,
        marginBottom: baseMargin * computedMargin[2]!,
        marginLeft: baseMargin * computedMargin[3]!,
      };
    default:
      return {margin: 0};
  }
};

const calculatePaddings = (paddings?: spacingType): FlexStyle => {
  const computedPadding = paddings?.filter(val => val !== undefined) || [];
  const basePadding = theme.grid.base4;

  switch (computedPadding.length) {
    case 1:
      return {padding: basePadding * computedPadding[0]!};
    case 2:
      return {
        paddingVertical: basePadding * computedPadding[0]!,
        paddingHorizontal: basePadding * computedPadding[1]!,
      };
    case 3:
      return {
        paddingTop: basePadding * computedPadding[0]!,
        paddingHorizontal: basePadding * computedPadding[1]!,
        paddingBottom: basePadding * computedPadding[2]!,
      };
    case 4:
      return {
        paddingTop: basePadding * computedPadding[0]!,
        paddingRight: basePadding * computedPadding[1]!,
        paddingBottom: basePadding * computedPadding[2]!,
        paddingLeft: basePadding * computedPadding[3]!,
      };
    default:
      return {padding: 0};
  }
};

const styles = (margins?: spacingType, paddings?: spacingType) =>
  StyleSheet.create({
    box: {
      ...calculateMargins(margins),
      ...calculatePaddings(paddings),
    },
  });
