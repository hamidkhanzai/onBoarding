import React, { PureComponent } from 'react';
import {
  Animated, TouchableOpacity, StyleSheet, Text, View,
  Image, Dimensions } from 'react-native';
import I18n from '../../../i18n';

import { colors, images, fonts } from '../../../common/';

const { width, height } = Dimensions.get("window");

type Props = {
  navigator: Navigator,
  goal: Object,
  index: number,
};

type State = {
  opacityAnim: Animated.Value;
};

export class GoalCard extends PureComponent<Props, State> {
  renderCard() {
    return (
      <View style={styles.CardContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {I18n.t(this.props.goal.title)}
          </Text>
          <Text style={styles.subTitleText}>
            {I18n.t(this.props.goal.subTitle)}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={images.chevronRight}
          />
        </View>
      </View>
    );
  }

  onSelectedTopic = () => {
    this.props.navigator.push({
      screen: "Age",
      passProps: {
      },
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onSelectedTopic}
      >
        <View style={styles.elevationWrapper}>
          <View style={styles.container}>
              { this.renderCard() }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  elevationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },

  CardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    height: 100,
  },

  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  imageContainer: {
   flex: 1,
   flexDirection: 'row',
   marginRight: 20,
   justifyContent: 'flex-end',
  },

  titleText: {
    fontFamily: fonts.firaSansBold,
    fontSize: 20,
  },

  subTitleText: {
    marginTop: 5,
    fontFamily: fonts.firaSansRegular,
    fontSize: 16,
  },

  container: {
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
    width: '97%',
    height: 100,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },

});
