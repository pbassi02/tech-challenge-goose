import React, {FC, PropsWithChildren, ReactNode} from 'react';
import {StatusBarProps, StyleSheet, View} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme';
import {FocusAwareStatusBar} from './statusBar';

export type CoreScreenProps = {
  title?: string;
  noBackButton?: boolean;
  invertedHeaderDecoration?: boolean;
  backgroundColor?: string;
  fullscreen?: boolean;
  header?: ReactNode;
  noBottomInset?: boolean;
  statusBarBackgroundColor?: string;
  bottomPadding?: boolean;
} & PropsWithChildren;

export const CoreScreen: FC<CoreScreenProps & StatusBarProps> = ({
  children,
  header = null,
  noBottomInset = false,
  barStyle = theme.type === 'light' ? 'dark-content' : 'light-content',
  statusBarBackgroundColor,
  backgroundColor = theme.colors.backgroundColor.primary,
}) => {
  const edges = noBottomInset ? ['left', 'right'] : ['left', 'right', 'bottom'];

  if (!header) {
    edges.push('top');
  }

  return (
    <SafeAreaView
      edges={edges as Edge[]}
      style={[
        styles.safeAreaContainer,
        {
          backgroundColor: statusBarBackgroundColor
            ? statusBarBackgroundColor
            : backgroundColor,
        },
      ]}>
      <FocusAwareStatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={
          statusBarBackgroundColor ? statusBarBackgroundColor : backgroundColor
        }
      />
      <View
        style={[
          styles.container,
          !noBottomInset && {paddingBottom: theme.grid.base12},
          {backgroundColor},
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
