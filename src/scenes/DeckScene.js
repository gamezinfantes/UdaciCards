import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from '../components'
import { getDeck } from '../ducks/decks/selectors'

class DeckScene extends Component {
  static propTypes = {
  }

  onPressAdd = () => {
    this.props.navigation.navigate('AddCardScene')
  }

  onPressStart = () => {
    this.props.navigation.navigate('CardScene')
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.texts}>
          <Text style={styles.deckTitle}>
            { this.props.deck.title }
          </Text>
          <Text style={styles.deckCardcount}>
            { this.props.deck.questions.length } Cards
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Add Card" onPress={this.onPressAdd} />
          <View style={styles.spacer} />
          <Button title="Start quiz" onPress={this.onPressStart} primary />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  texts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    padding: 16,
  },
  deckTitle: {
    fontSize: 36,
  },
  deckCardcount: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)'
  },
  spacer: {
    height: 8,
  }
})

export default connect((state, ownProps) => ({
  deck: getDeck(state, ownProps.navigation.state.params.deckId)
}))(DeckScene)
