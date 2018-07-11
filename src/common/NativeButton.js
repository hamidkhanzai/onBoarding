import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text,
  Platform } from 'react-native';

import { colors, fonts } from './';

type Props = {
  style: Array<any> | Object;
  children: Array<any> | Object;
  onPress: () => void;
  title: string,
  borderless?: boolean;
  disabled: boolean;
  disabledOpacity?: number;
};


export default function NativeButton({
  onPress,
  borderless,
  title,
  style,
  disabled,
  disabledOpacity,
}: Props) {
  return (
    <TouchableHighlight
      style={[ style, { backgroundColor: disabled ? colors.gray : colors.darkBlack },
        styles.submit]}
      disabled={disabled}
      onPress={onPress}
      underlayColor='#fff'>
        <Text style={[{ opacity: disabled ? disabledOpacity : 1 },
          styles.submitText]}>{title}</Text>
    </TouchableHighlight>
  );
}

NativeButton.defaultProps = {
  borderless: false,
  disabled: false,
  disabledOpacity: 1,
  title: 'Continue',
};

const styles = StyleSheet.create({
  submit:{
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.darkBlack,
    borderColor: '#fff',
    width: '40%',
  },

  submitText:{
    marginTop: 10,
    color:'#fff',
    textAlign:'center',
    alignSelf: 'center',
    fontFamily: fonts.firaSansMedium,
    fontSize: 16,
  }
});
