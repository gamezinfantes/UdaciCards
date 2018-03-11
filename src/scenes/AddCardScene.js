import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, TextInput } from '../components'


export default class AddCardScene extends Component {

  onChangeInput = () => {

  }
  
  onPressSubmit = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.root}>
        <TextInput
          onChange={this.onChangeInput}
          />
        <TextInput
          onChange={this.onChangeInput}
          multiline
          numberOfLines={4}
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