import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholders, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = style;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        placeholder={placeholders}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const style = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};
