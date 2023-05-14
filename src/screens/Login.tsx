import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import {CoreScreen} from '../components/CoreScreen';
import {LoginStackScreenProp} from '../navigation/navigation';
import {LoginScreens} from '../navigation/login/LoginScreens';
import {BoxContainer} from '../components/containers/BoxContainer';
import theme from '../theme';
import {AppTextInput} from '../components/input/AppTextInput';
import {useAppDispatch} from '../redux/reduxHook';
import {signIn} from '../redux/login/actions';

const Login: FC<LoginStackScreenProp<LoginScreens.Login>> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  const onPressBack = () => {
    navigation.goBack();
  };

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Error', 'Email is required');
      return;
    }

    if (!pwd) {
      Alert.alert('Error', 'Password is required');
      return;
    }

    try {
      setLoading(true);
      await dispatch(signIn({email, password: pwd})).unwrap();
    } catch (err) {
      const error = err as string;
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CoreScreen noBottomInset>
      <BoxContainer style={styles.mainContainer}>
        <BoxContainer style={styles.header}>
          <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
            <Image
              source={require('../assets/arrow-left.png')}
              style={styles.backArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/logo/goose-logo.webp')}
            style={styles.logo}
            resizeMode="contain"
          />
        </BoxContainer>
        <BoxContainer margins={[4, 4]} style={styles.contentContainer}>
          <Text style={styles.title}>Login</Text>
          <BoxContainer margins={[6, 0, 4]}>
            <AppTextInput
              value={email}
              onChangeText={setEmail}
              label="ENTER YOUR E-MAIL"
            />
          </BoxContainer>
          <BoxContainer margins={[2, 0]}>
            <AppTextInput value={pwd} onChangeText={setPwd} label="PASSWORD" />
          </BoxContainer>
        </BoxContainer>
      </BoxContainer>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator
            size={'small'}
            color={theme.colors.text.tertiary}
          />
        ) : (
          <Text style={styles.loginButton}>Login</Text>
        )}
      </TouchableOpacity>
    </CoreScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backArrow: {
    width: 20,
    tintColor: theme.colors.text.quinary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
  },
  logo: {
    width: 36,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    color: theme.colors.text.primary,
    fontWeight: 'bold',
    fontSize: 24,
  },
  contentContainer: {},
  button: {
    backgroundColor: theme.colors.backgroundColor.senary,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    color: theme.colors.text.tertiary,
    fontSize: 18,
  },
});
