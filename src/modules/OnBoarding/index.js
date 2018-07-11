import React, { Component } from 'react';

import { StyleSheet, FlatList, Dimensions, View, Image, Animated,
  Text } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { colors, fonts, images } from '../../common/';
import { GoalCard } from './components/GoalCard';
import I18n from '../../i18n';
import { setGoal } from '../../actions/onboarding';

type Props = {
  navigator: Navigator,
}

const mapStateToProps = state => ({
  goals: state.onBoarding.goals,
});

const mapDispatchToProps = {
  setGoal,
};

const { width, height } = Dimensions.get("window");

export class OnBoarding extends Component<Props> {
  static navigatorStyle = {
    statusBarColor: colors.light,
    statusBarTextColorScheme: 'dark',
  };

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(height / 3);
    this.animatedValue2 = new Animated.Value(2);
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 800
      }),

      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 0,
      })
    ]).start();
  }

  renderItem = ({ item, index }: { item: Object, index: number }) => (
    <GoalCard
      goal={item}
      navigator={this.props.navigator}
      setGoal={this.props.setGoal}
      index={index}
    />
  )

  render() {
    const animatedStyle = {
      transform: [
        { translateY: this.animatedValue1},
        { scale: this.animatedValue2}
      ]
    }
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImageLeft}>
          <Animatable.Image animation = "fadeInLeft" duration={1000} delay={1000}
            source={images.imgBeans} style={styles.imgBeans} />
        </View>
        <View style={styles.backgroundImageRight}>
          <Animatable.Image animation = "fadeInRight" duration={1000} delay={1000}
            source={images.imgMat} style={styles.imgMat} />
          <Animatable.Image animation = "fadeInRight" duration={1000} delay={1000}
            source={images.imgDumbbell} style={styles.imgDumbbell} />
        </View>

        <Animated.View style={[animatedStyle, styles.titleContainer]}>
          <Image style={styles.image} source={images.icon8Logo} />
        </Animated.View>
        <Animatable.View  animation = "fadeInUp" duration={1000} delay={1000} >
          <View style={styles.titleContainer}>
            <Text style={styles.welcome}> {I18n.t('welcome')} </Text>
            <Text style={styles.title}> {I18n.t("goal_question")} </Text>
          </View>
          <View style={styles.List}>
            <FlatList
              data={this.props.goals}
              renderItem={this.renderItem}
              keyExtractor={_d => String(Math.random() * 10000)}
            />
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    backgroundColor: colors.white,
    padding: width * 0.01,
  },

  imgBeans: {
    position: 'absolute',
    marginTop: 85,
  },

  imgDumbbell: {
    position: 'absolute',
    marginTop: height - 325,
  },

  imgMat: {
    position: 'absolute',
    marginTop: height - 110,
  },

  backgroundImageLeft: {
    alignItems: 'flex-start',
  },

  backgroundImageRight: {
    alignItems: 'flex-end',
  },


  image: {
    height: 44,
    width: 22,
    marginBottom: 10,
    marginTop: 30,
  },

  welcome: {
    fontFamily: fonts.firaSansMedium,
    fontSize: 12,
    marginBottom: 20,
  },

  title: {
    fontFamily: fonts.firaSansBold,
    marginBottom: 30,
    fontSize: 26,
  },
});
