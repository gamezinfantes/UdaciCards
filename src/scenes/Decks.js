import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Deck, StatusBar, Fab } from '../components'
import { TabNavigator } from 'react-navigation';
import { AddDeck } from '../scenes'
import { connect } from 'react-redux'
import Theme from '../theme'
import { getDecks } from '../ducks/decks/selectors'
import { Constants } from 'expo'


class DecksTab extends React.PureComponent {
  onPressDeck = (deckId) => {
    this.props.navigation.navigate('DeckScene', {
      deckId
    })
  }

  onPressFab = () => {
    this.props.navigation.navigate('AddDeck')
  }

  render = () => (
    <View style={styles.decksTab}>
      { this.props.decks.map(deck => (
        <Deck
          title={deck.title}
          cardCount={deck.questions.length}
          onPress={this.onPressDeck}
          key={deck.id}
          id={deck.id} />
      ))}
      <Fab onPress={this.onPressFab} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  decksTab: {
    paddingVertical: 8,
    flex: 1,
  }
});


export default connect(state => ({
  decks: getDecks(state),
}))(DecksTab);


// const connectedAddDeck = connect(function() {
//   return {}
// })(AddDeck)

// const Tabs = TabNavigator({
//   Decks: {
//     screen: ConectedDecksTab,
//   },
//   NewDeck: {
//     screen: connectedAddDeck,
//   },
// }, {
//   tabBarOptions: {
//     activeBackgroundColor: Theme.colors.primary,
//     style: {
//       backgroundColor: Theme.colors.primary,
//       borderTopWidth: Constants.statusBarHeight,
//       borderColor: Theme.colors.primaryDark,
//     },
//   },
// });

// export default Tabs


