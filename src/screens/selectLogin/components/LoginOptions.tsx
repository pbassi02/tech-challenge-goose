import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import {BoxContainer} from '../../../components/containers/BoxContainer';
import theme from '../../../theme';

const SOCIAL_LOGIN_METHODS = [
  {
    label: 'Continue with Facebook',
    sourceUri: require('../../../assets/loginIcons/facebookv2.webp'),
  },
  {
    label: 'Continue with Google',
    sourceUri: require('../../../assets/loginIcons/gplus.webp'),
  },
  {
    label: 'Continue with Apple',
    sourceUri: require('../../../assets/loginIcons/apple.webp'),
  },
  {
    label: 'Login with Email',
    sourceUri: require('../../../assets/loginIcons/mailv2.webp'),
  },
];

export interface ILoginOptionsProps {
  onPress: () => void;
}

const LoginOptions: FC<ILoginOptionsProps> = ({onPress}) => {
  const handleLoginPress = (index: number) => {
    if (index === 3) {
      //Since only login by email is actionable item
      onPress();
    }
  };

  return (
    <View style={styles.overlay}>
      <BoxContainer style={styles.optionContainer}>
        {SOCIAL_LOGIN_METHODS.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.optItem}
                onPress={() => handleLoginPress(index)}>
                <Image
                  source={item.sourceUri}
                  style={styles.iconContainer}
                  resizeMode="contain"
                />
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
              {index !== SOCIAL_LOGIN_METHODS.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          );
        })}
      </BoxContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.text.primary,
    fontSize: 14,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.text.secondary,
  },
  optItem: {
    flexDirection: 'row',
    paddingHorizontal: theme.grid.base24,
    alignItems: 'center',
    height: 60,
  },
  iconContainer: {
    width: 25,
    marginRight: theme.grid.base12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  optionContainer: {
    backgroundColor: theme.colors.backgroundColor.primary,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default LoginOptions;
