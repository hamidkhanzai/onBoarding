import React, { Component } from 'react';

import { StyleSheet, FlatList, Dimensions, View, Image,
  Text } from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts, images } from '../../common/';
import { GoalCard } from './components/GoalCard';
import I18n from '../../i18n';

type Props = {
  navigator: Navigator,
}

const mapStateToProps = state => ({
  goals: state.onBoarding.goals,
});


const { width, height } = Dimensions.get("window");

export class OnBoarding extends Component<Props> {
  static navigatorStyle = {
    statusBarColor: colors.light,
    statusBarTextColorScheme: 'dark',
  };

  renderItem = ({ item, index }: { item: Object, index: number }) => (
    <GoalCard
      goal={item}
      navigator={this.props.navigator}
      index={index}
    />
  )

  render() {
    alert('this is alert');
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImageLeft}>
          <Image source={images.imgBeans} style={styles.imgBeans} />
        </View>
        <View style={styles.backgroundImageRight}>
          <Image source={images.imgMat} style={styles.imgMat} />
          <Image source={images.imgDumbbell} style={styles.imgDumbbell} />
        </View>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={images.icon8Logo} />
        </View>
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
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(OnBoarding);

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
