import {Image, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {CoreScreen} from '../../components/CoreScreen';
import theme from '../../theme';
import {BoxContainer} from '../../components/containers/BoxContainer';
import LoginOptions from './components/LoginOptions';
import {LoginStackScreenProp} from '../../navigation/navigation';
import {LoginScreens} from '../../navigation/login/LoginScreens';

const SelectLogin: FC<LoginStackScreenProp<LoginScreens.SelectLogin>> = ({
  navigation,
}) => {
  const handleLogin = () => {
    navigation.navigate(LoginScreens.Login);
  };

  return (
    <CoreScreen
      barStyle={'light-content'}
      backgroundColor={theme.colors.header.tertiary}
      noBottomInset>
      <LoginOptions onPress={handleLogin} />
      <BoxContainer style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo/goose-logo-lg-white.webp')}
          style={styles.logoStyles}
          resizeMode="contain"
        />
        <BoxContainer margins={[2, 0]}>
          <Text style={styles.tagline}>THE INSURANCE SUPER-APP</Text>
        </BoxContainer>
      </BoxContainer>
      <BoxContainer style={styles.contentContainer}>
        <Text style={styles.tos}>Terms of Service | Privacy Policy</Text>
        <Text style={styles.disclaimer}>
          Insurance is sold by Goose insurance and underwritten by various
          companies
        </Text>
      </BoxContainer>
    </CoreScreen>
  );
};

export default SelectLogin;

const styles = StyleSheet.create({
  tagline: {
    color: theme.colors.text.tertiary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tos: {
    color: theme.colors.text.quaternary,
    fontSize: 11,
  },
  disclaimer: {
    marginTop: 8,
    color: theme.colors.text.quaternary,
    fontSize: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.backgroundColor.tertiary,
    paddingHorizontal: 12,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    flex: 1.25,
    backgroundColor: theme.colors.backgroundColor.quaternary,
    alignItems: 'center',
    paddingHorizontal: theme.grid.base24,
    paddingVertical: theme.grid.base32,
  },
  logoStyles: {
    width: 200,
  },
});
