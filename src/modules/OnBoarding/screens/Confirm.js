import React, { Component } from 'react';

import { StyleSheet, FlatList, Dimensions, View, Image,
  Text } from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts, images } from '../../../common/';
import I18n from '../../../i18n';
import NativeButton from '../../../common/NativeButton';

type Props = {
  navigator: Navigator,
}

const mapStateToProps = state => ({
  selectedGaol: state.onBoarding.selectedGaol,
  age: state.onBoarding.age,
  height: state.onBoarding.height,
});

const { width, height } = Dimensions.get("window");

export class Confirm extends Component<Props> {
  static navigatorStyle = {
    statusBarColor: colors.light,
    statusBarTextColorScheme: 'dark',
  };

  onSave = () => {
    console.log("Saved!");
  }

  getHeight = () => {
    const { height, unit } = this.props.height;
    if (unit === 'cm') {
      return `${height}cm`;
    }
    return this.toFeet(height);
  }

  toFeet = (height) => {
    const realFeet = ((height*0.393700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}ft & ${inches}in`;
  }

  render() {
    const { selectedGaol, age } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImageRight}>
          <Image source={images.imgParsley} style={styles.imgParsley} />
        </View>
        <View style={styles.backgroundImageLeft}>
          <Image source={images.imgBeans} style={styles.imgBeans} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {I18n.t("confirm_title")} </Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.row}>
            <Text style={styles.rowText}> {'Goal'}</Text>
            <Text style={styles.rowTextRight}> {I18n.t(selectedGaol)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}> {'Age'}</Text>
            <Text style={styles.rowTextRight}> {age.toString()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}> {'Height'}</Text>
            <Text style={styles.rowTextRight}> {this.getHeight()}</Text>
          </View>

        </View>
        <View style={styles.buttonContainer}>
          <NativeButton
            onPress={() => this.onSave()}
            style={styles.buttonMargin}
            title={"Saved"}
          >
          </NativeButton>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(Confirm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 200,
  },

  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: colors.lightCard,
    height: 200,
  },

  rowText: {
    alignSelf: 'center',
    fontFamily: fonts.firaSansMedium,
    marginLeft: 20,
    fontSize: 16,
  },

  rowTextRight: {
    alignSelf: 'center',
    fontFamily: fonts.firaSansRegular,
    marginRight: 20,
    fontSize: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    width: '100%',
    height: 70,
    borderBottomColor: colors.gray,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgBeans: {
    position: 'absolute',
    marginTop: height - 400,
  },

  imgParsley: {
    position: 'absolute',
  },

  backgroundImageLeft: {
    alignItems: 'flex-start',
  },

  backgroundImageRight: {
    alignItems: 'flex-end',
  },

  title: {
    marginTop: 50,
    fontFamily: fonts.firaSansBold,
    marginBottom: 40,
    fontSize: 26,
  },
});
