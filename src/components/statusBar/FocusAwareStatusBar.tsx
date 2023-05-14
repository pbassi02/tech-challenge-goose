import {useIsFocused} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

/**
 * Different Status Bar styles when using with TabBars might
 * not render properly keeping the latest bar style instead of get
 * the new definition form the screen component.
 * See the following from react-navigation for more details:
 * - https://reactnavigation.org/docs/status-bar/#tabs-and-drawer
 * @param props StatusBarProps
 * @returns StatusBar aware of the screen focused
 */
export const FocusAwareStatusBar: FC<StatusBarProps> = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};
