import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, TextInput } from '../components'


export default class AddDeck extends Component {

  onChangeInput = () => {

  }
  
  onPressSubmit = () => {
  }

  render() {
    return (
      <View style={styles.root}>
        <TextInput
          onChange={this.onChangeInput}
          style={styles.input}
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