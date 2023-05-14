import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CoreScreen} from '../components/CoreScreen';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {
  selectAddress,
  selectDob,
  selectUserName,
} from '../redux/login/selectors';
import {BoxContainer} from '../components/containers/BoxContainer';
import theme from '../theme';
import {logout} from '../redux/login/slice';

const Account = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const dob = useAppSelector(selectDob);
  const localeDate = new Date(dob || '').toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const address = useAppSelector(selectAddress);
  const splitAddress = address?.split(',');
  const unitAddress = splitAddress?.slice(0, 2).join(',');
  const cityProvince = splitAddress?.slice(2, splitAddress.length).join(',');

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <CoreScreen
      backgroundColor={theme.colors.backgroundColor.quaternary}
      statusBarBackgroundColor={theme.colors.backgroundColor.primary}
      noBottomInset>
      <BoxContainer paddings={[8, 4, 4]} style={styles.contentContainer}>
        <Text style={styles.nameText}>{userName}</Text>
        <BoxContainer style={styles.iconRow}>
          <Image
            source={require('../assets/genIcons/profile-cake.webp')}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.rowText}>{localeDate}</Text>
        </BoxContainer>
        <BoxContainer style={styles.iconRow}>
          <Image
            source={require('../assets/genIcons/profile-home.webp')}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.rowText}>{unitAddress}</Text>
        </BoxContainer>
        <BoxContainer style={styles.iconRowText}>
          <View style={styles.icon} />
          <Text style={styles.rowText}>{cityProvince}</Text>
        </BoxContainer>
        <BoxContainer style={styles.arrowContainer}>
          <Image
            source={require('../assets/pink-right-arrow-ghost.webp')}
            style={styles.arrowIcon}
            resizeMode="contain"
          />
        </BoxContainer>
      </BoxContainer>
      <BoxContainer
        style={styles.buttonContainer}
        paddings={[8, 4, 16]}
        margins={[4, 0]}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </BoxContainer>
    </CoreScreen>
  );
};

export default Account;

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.grid.base16,
    color: theme.colors.text.primary,
  },
  icon: {
    width: 16,
    marginRight: theme.grid.base12,
  },
  iconRowText: {
    flexDirection: 'row',
    height: 16,
  },
  rowText: {
    fontSize: 14,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.grid.base12,
    height: 20,
    width: '50%',
  },
  contentContainer: {
    backgroundColor: theme.colors.backgroundColor.primary,
  },
  arrowIcon: {
    width: 30,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: theme.colors.backgroundColor.primary,
  },
  button: {
    backgroundColor: theme.colors.backgroundColor.senary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.grid.base20,
    borderRadius: theme.grid.base8,
  },
  logoutText: {
    color: theme.colors.text.tertiary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
