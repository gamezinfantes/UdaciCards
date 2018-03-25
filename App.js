import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AddCardScene, DeckScene, CardScene, Decks, AddDeck } from './src/scenes'
import { StatusBar } from './src/components'
import { Provider } from 'react-redux'
import store from './src/store'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import Theme from './src/theme'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}


const RootNavigator = StackNavigator({
  // HomeScene: { 
  //   screen: HomeScene,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  DeckScene: { 
    screen: DeckScene,
    navigationOptions: {
      title: "Deck"
    }
  },
  CardScene: { 
    screen: CardScene,
    navigationOptions: {
      title: "Card"
    }
  },
  AddCardScene: { 
    screen: AddCardScene,
    navigationOptions: {
      title: "Add Card",
    }
  },
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: "Decks",
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "Add Deck",
    },
    transitionConfig
  },
}, {
  initialRouteName: 'Decks',
  headerMode: 'screen',
  transitionConfig: getSlideFromRightTransition,
  navigationOptions: {
    headerTintColor: Theme.colors.text,
    headerStyle: {
      backgroundColor: Theme.colors.primary,
    }
  }
})

