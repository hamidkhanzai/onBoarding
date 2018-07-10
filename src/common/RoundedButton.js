import React, { PureComponent } from 'react';
import { StyleSheet, TouchableHighlight, View, Text,
  Platform } from 'react-native';

import { colors, fonts } from './';

type Props = {
  style: Array<any> | Object;
  children: Array<any> | Object;
  active: boolean,
  onPress: (unit: string) => void;
  borderless?: boolean;
  rippleColor?: string;
  disabled: boolean;
  disabledOpacity?: number;
};


export default class RoundedButton extends PureComponent<Props> {

  setUnit = (unit: string) => {
    this.props.onPress(unit);
  }

  render() {
    const { onPress, active, disabled } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[ { backgroundColor: !active ? colors.darkBlack : colors.white },
            styles.submitLeft]}
          disabled={disabled}
          onPress={() => this.setUnit('ft')}
          underlayColor='#fff'>
            <Text style={[{ opacity: disabled ? disabledOpacity : 1 },
              { color: !active ? colors.white : colors.darkBlack },
              styles.submitText]}>FT</Text>
        </TouchableHighlight>
          <TouchableHighlight
            style={[ { backgroundColor: active ? colors.darkBlack : colors.white },
            styles.submitRigth]}
          disabled={disabled}
          onPress={() => this.setUnit('cm')}
          underlayColor='#fff'>
            <Text style={[{ opacity: disabled ? disabledOpacity : 1 },
              { color: active ? colors.white : colors.darkBlack },
              styles.submitText]}>CM</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RoundedButton.defaultProps = {
  borderless: false,
  rippleColor: colors.rippleDefault,
  disabled: false,
  disabledOpacity: 1,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    paddingTop: 0,
  },

  submitLeft:{
    marginTop: 10,
    marginRight: 0,
    paddingRight: 0,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    width: '25%',
  },

  submitRigth:{
    marginTop: 10,
    height: 40,
    marginLeft: 0,
    paddingLeft: 0,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    width: '25%',
  },

  submitText:{
    marginTop: 5,
    textAlign:'center',
    alignSelf: 'center',
    fontFamily: fonts.firaSansMedium,
    fontSize: 16,
  }
});
