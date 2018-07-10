import React, { Component } from 'react';

import { StyleSheet, FlatList, Dimensions, View, Image,
  TextInput, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts, images } from '../../../common/';
import NativeButton from '../../../common/NativeButton';
import I18n from '../../../i18n';
import { setAge } from '../../../actions/onboarding';

type Props = {
  navigator: Navigator,
}
type State = {
  age: number,
}

const mapStateToProps = state => ({
  age: state.onBoarding.age,
});

const mapDispatchToProps = {
  setAge,
};

const { width, height } = Dimensions.get("window");

export class Age extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      age: 0,
    }
  }

  static navigatorStyle = {
    statusBarColor: colors.light,
    statusBarTextColorScheme: 'dark',
  };

  onContinue = () => {
    this.props.setAge(this.state.age);
    this.props.navigator.push({
      screen: 'Height',
    });
  }

  onTextChanged = (age) => {
    this.setState({ age: parseInt(age) });
    console.log(age);
  }

  render() {
    console.log(this.props.age);
    return (
      <View style={styles.container}>
        <View style={styles.topLine}>
        </View>
        <View style={styles.controlCaontainer}>
          <Text style={styles.controlQuestion}>
            {I18n.t('age_question')}
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior = {'padding'}  enabled
          style={styles.keyboardcontainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={age => this.onTextChanged(age)}
            keyboardType={'numeric'}
            maxLength={3}
            textAlign={'center'}
          />

          <NativeButton
            onPress={() => this.onContinue()}
            disabled={!(this.state.age > 17 && this.state.age <= 130)}
            style={styles.buttonMargin}
          >
          </NativeButton>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Age);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  keyboardcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 80,
  },

  topLine: {
    width: '70%',
    borderWidth: 1.4,
    borderColor: colors.topBorder,
  },

  controlCaontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  controlQuestion: {
    fontFamily: fonts.firaSansMedium,
    fontSize: 24,
    marginTop: 20,
  },

  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBlack,
    fontFamily: fonts.firaSansBold,
    fontSize: 32,
  },

  buttonMargin: {
    marginTop: 80,
    marginBottom: 100,
  },

});
