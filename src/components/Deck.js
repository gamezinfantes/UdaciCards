import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class Deck extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cardCount: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>
          { this.props.title }
        </Text>
        <Text>
          { this.props.cardCount }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderColor: 'red',
    borderWidth: 1,
    padding: 16,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { 
      width: 4,
      height: 4
    },
  },
  title: {
    fontSize: 20,
  }
})