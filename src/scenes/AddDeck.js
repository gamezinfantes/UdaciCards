import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, TextInput } from '../components'


export default class AddDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired
  }

  state = {
    deckValue: "eee",
  }

  onChangeInput = (text) => {
    this.setState({
      deckValue: text
    })
  }
  
  onPressSubmit = () => {
    this.props.addDeck()
  }

  render() {
    return (
      <View style={styles.root}>
        <TextInput
          onChangeText={this.onChangeInput}
          style={styles.input}
          value={this.state.deckValue}
          underlineColorAndroid="transparent"
          />
        <Button title="Submit" primary onPress={this.onPressSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
})

connect(null)(AddDeck)
