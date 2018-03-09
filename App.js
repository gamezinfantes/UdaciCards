import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo'
import { Deck } from './src/components'
import { DeckScene } from './src/scenes'

const MyStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar barStyle="light-content" />
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const DecksTab = (props) => (
  <View>
    {/* { props.decks.map(deck => (
      <Deck title={deck.title} cardCount={deck.cardCount} />
    ))} */}
  </View>
)
const Tabs = TabNavigator({
  Decks: { screen: DecksTab },
  NewDeck: { screen: DecksTab },
});

const RootNavigator = StackNavigator({
  Main: { screen: Tabs },
  DeckScene: { screen: DeckScene },
}, {
  initialRouteName: 'DeckScene',
})

