import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'
import Theme from '../theme'

export default class Deck extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cardCount: PropTypes.number.isRequired,
    onPress: PropTypes.func,
  }

  onPressDeck = () => {
    this.props.onPress && this.props.onPress();
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onPressDeck}>
        <View style={styles.root}>
          <Text style={styles.title}>
            { this.props.title }
          </Text>
          <Text>
            { this.props.cardCount }
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: Theme.colors.deck,
    borderColor: Theme.colors.divider,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { 
      width: 4,
      height: 4
    },
  },
  title: {
    color: Theme.colors.primaryText,
    fontSize: 20,
  }
})