import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import theme from '../../theme';

interface AppTextInputProps extends TextInputProps {
  label: string;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: isFocused
            ? theme.colors.textInput.secondary
            : theme.colors.textInput.primary,
        },
      ]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingTop: 5,
  },
  input: {
    height: 36,
  },
  label: {
    color: theme.colors.text.quinary,
    fontSize: 12,
  },
});

export default AppTextInputProps;
