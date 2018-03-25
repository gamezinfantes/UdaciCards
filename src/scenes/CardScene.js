import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from '../components'
import Theme from '../theme'

class CardScene extends Component {
  static propTypes = {
  }

  onPressCorrect = () => {
    
  }

  onPressIncorrect = () => {
    
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.count}> 2 / 2</Text>
        <View style={styles.texts}>
          <Text style={styles.question}>
            Does React Native work with Android?
          </Text>
          <Text style={styles.answer}>
            Answer
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            color={Theme.colors.accept} 
            onPress={this.onPressCorrect}
            title="Correct" />
          <View style={styles.spacer} />
          <Button
            color={Theme.colors.cancel}
            onPress={this.onPressIncorrect}
            title="Incorrect" />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  texts: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttons: {
    padding: 16,
  },
  spacer: {
    height: 8,
  },
  answer: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 36,
    textAlign: 'center',
  },
  count: {
    fontSize: 20,
  }
})

export default CardScene
