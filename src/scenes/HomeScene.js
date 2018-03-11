import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Deck, StatusBar } from '../components'
import { TabNavigator } from 'react-navigation';
import { AddDeck } from '../scenes'
import { connect } from 'react-redux'
import Theme from '../theme'
import { getDecks } from '../ducks/decks/selectors'
import { Constants } from 'expo'


class DecksTab extends Component {
  onPressDeck = () => {
    this.props.navigation.navigate('DeckScene')
  }

  render = () => (
    <View style={styles.decksTab}>
      { this.props.decks.map(deck => (
        <Deck
          title={deck.title}
          cardCount={deck.questions.length}
          onPress={this.onPressDeck}
          key={deck.id} />
      ))}
    </View>
  )
}

const ConectedDecksTab = connect(state => ({
  decks: getDecks(state),
}))(DecksTab);

const connectedAddDeck = connect(function() {
  return {}
})(AddDeck)

const Tabs = TabNavigator({
  Decks: {
    screen: ConectedDecksTab,
  },
  NewDeck: {
    screen: connectedAddDeck,
  },
}, {
  tabBarOptions: {
    activeBackgroundColor: Theme.colors.primary,
    style: {
      backgroundColor: Theme.colors.primary,
      borderTopWidth: Constants.statusBarHeight,
      borderColor: Theme.colors.primaryDark,
    },
  },
});

export default Tabs


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  decksTab: {
    paddingVertical: 8,
  }
});

