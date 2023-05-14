import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {CoreScreen} from '../../components/CoreScreen';
import theme from '../../theme';
import {BoxContainer} from '../../components/containers/BoxContainer';
import {useAppSelector} from '../../redux/reduxHook';
import {selectProducts, selectUserName} from '../../redux/login/selectors';
import InsMainType from './InsMainType';
import {IProduct} from '../../redux/login/slice';

const Home = () => {
  const userName = useAppSelector(selectUserName);
  const products = useAppSelector(selectProducts);

  const insTypeImgMap: Record<number, ImageSourcePropType> = {
    1: require('../../assets/insImages/1.webp'),
    2: require('../../assets/insImages/2.webp'),
    3: require('../../assets/insImages/3.webp'),
    4: require('../../assets/insImages/4.webp'),
    5: require('../../assets/insImages/5.webp'),
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const InsItem = ({item, index}: {item: IProduct; index: number}) => {
    return (
      <BoxContainer key={index} style={styles.insContainer}>
        <BoxContainer style={styles.insSubContainer}>
          <Image source={insTypeImgMap[item.id]} style={styles.insImage} />
          <Text style={styles.insText}>{item.title}</Text>
        </BoxContainer>
      </BoxContainer>
    );
  };

  return (
    <CoreScreen
      backgroundColor={theme.colors.backgroundColor.quaternary}
      noBottomInset>
      <BoxContainer style={styles.header} paddings={[0, 4]}>
        <Image
          source={require('../../assets/logo/goose-logo-sm-black.webp')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/genIcons/rewards.webp')}
          style={styles.giftIcon}
        />
      </BoxContainer>
      <BoxContainer style={styles.mainContainer}>
        <Text style={styles.titleText}>
          Hi {userName}, what would you like to protect?
        </Text>
        <BoxContainer style={styles.insMainTypeCont}>
          <InsMainType selected />
        </BoxContainer>
      </BoxContainer>
      <BoxContainer style={styles.insTypeContainer}>
        <FlatList data={products} renderItem={InsItem} numColumns={3} />
      </BoxContainer>
    </CoreScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: theme.grid.base32,
    paddingTop: theme.grid.base12,
  },
  insMainTypeCont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flex: 1,
  },
  insText: {
    color: theme.colors.text.primary,
    fontSize: 12,
    textAlign: 'center',
  },
  insSubContainer: {
    backgroundColor: theme.colors.backgroundColor.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    padding: theme.grid.base16,
    margin: theme.grid.base12,
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
  insContainer: {
    flex: 1,
    maxWidth: '33.3%',
  },
  insImage: {
    width: 40,
    height: 40,
    marginBottom: theme.grid.base4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  logo: {
    marginLeft: theme.grid.base8,
    height: 33,
    width: 94,
  },
  giftIcon: {
    marginRight: theme.grid.base8,
    height: 20,
    width: 20,
  },
  titleText: {
    fontSize: 16,
    color: theme.colors.text.secondary,
  },
  insTypeContainer: {
    flex: 2.5,
    backgroundColor: theme.colors.backgroundColor.quinary,
    paddingVertical: theme.grid.base16,
    flexDirection: 'row',
  },
});
