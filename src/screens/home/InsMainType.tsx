import {Image, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {BoxContainer} from '../../components/containers/BoxContainer';
import theme from '../../theme';

export interface InsMainTypeProps {
  selected?: boolean;
}

const InsMainType: FC<InsMainTypeProps> = ({selected = false}) => {
  return (
    <BoxContainer style={styles.mainContainer}>
      <Image
        source={require('../../assets/insTypeImages/life-insurance.gif')}
        resizeMode="contain"
        style={styles.insMainTypeImage}
      />
      <Text style={styles.text}>Life & Health</Text>
      <BoxContainer
        style={[
          styles.selector,
          selected && {borderBottomColor: theme.colors.backgroundColor.quinary},
        ]}
      />
    </BoxContainer>
  );
};

export default InsMainType;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: theme.colors.text.primary,
    marginBottom: theme.grid.base8,
    fontWeight: 'bold',
  },
  mainContainer: {
    alignItems: 'center',
  },
  insMainTypeImage: {
    height: 70,
    width: 60,
  },
  selector: {
    width: 0,
    height: 0,
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
