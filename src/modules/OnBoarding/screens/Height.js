import React, { Component } from 'react';

import { StyleSheet, FlatList, Dimensions, View, Image,
  TextInput, Text, KeyboardAvoidingView } from 'react-native';
import { colors, fonts, images } from '../../../common/';
import NativeButton from '../../../common/NativeButton';
import RoundedButton from '../../../common/RoundedButton';
import I18n from '../../../i18n';

type Props = {
  navigator: Navigator,
}

type State = {
  height: number,
  unit: string,
}

export default class Height extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      height: 0,
      unit: 'cm',
    }
  }

  static navigatorStyle = {
    statusBarColor: colors.light,
    statusBarTextColorScheme: 'dark',
  };

  onContinue = () => {
    console.log(this.props.navigator);
  }

  onUnitChange = (unit: string) => {
    this.setState({ unit, height: 0 });
    this.textInput.clear();
  }

  onTextChanged = (height) => {
    if (this.state.unit === 'cm') {
      this.setState({ height: parseInt(height) });
    } else {
      this.setState({ height: parseInt(height) * 30.48 });
    }
  }

  onInchChanged = (inch) => {
    this.setState({ height: this.state.height + parseInt(inch) * 2.54 });
  }

  capitalize = (unit: string) => {
    return unit.charAt(0).toUpperCase() + unit.slice(1);
  }

  render() {
    const { unit } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topLine}>
        </View>
        <View style={styles.controlCaontainer}>
          <Text style={styles.controlQuestion}>
            {I18n.t('height_question')}
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior = {'padding'}  enabled
          style={styles.keyboardcontainer}>
            <View style={styles.mainInputcontainer}>
              <View
                style={[{width: unit == 'cm' ? '100%' : '45%' },
                  styles.inputContainer]}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={height => this.onTextChanged(height)}
                  keyboardType={'numeric'}
                  maxLength={3}
                  ref={input => { this.textInput = input }}
                  textAlign={'right'}
                />
                <Text style={styles.unit}> {this.capitalize(unit)} </Text>
               </View>
              { unit === 'ft' && <View
                style={[{ width: '45%', marginLeft: 20 } ,
                  styles.inputContainer]}>
                 <TextInput
                  style={styles.textInput}
                  onChangeText={age => this.onInchChanged(age)}
                  keyboardType={'numeric'}
                  maxLength={3}
                  textAlign={'right'}
                />
                <Text style={styles.unit}> {'In'} </Text>
              </View>}
          </View>

          <RoundedButton
            onPress={(unit) => this.onUnitChange(unit)}
            active={unit === 'cm'}
          >
          </RoundedButton>

          <NativeButton
            onPress={() => this.onContinue()}
            disabled={!(this.state.height >= 125 && this.state.height <= 301)}
            style={styles.buttonMargin}
          >
          </NativeButton>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  keyboardcontainer: {
    marginTop: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  topLine: {
    width: '70%',
    borderWidth: 1.4,
    borderColor: colors.topBorder,
  },

  controlCaontainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  controlQuestion: {
    fontFamily: fonts.firaSansMedium,
    fontSize: 24,
    marginTop: 20,
  },

  mainInputcontainer: {
    flexDirection: 'row',
    width: '100%'
  },

  inputContainer: {
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBlack,
  },

  textInput: {
    width: '45%',
    paddingBottom: 0,
    fontFamily: fonts.firaSansBold,
    fontSize: 32,
  },

  unit: {
    marginTop: 30,
    paddingBottom: 0,
    color: colors.darkBlack,
    fontSize: 16,
  },

  buttonMargin: {
    marginBottom: 100,
  },


});
