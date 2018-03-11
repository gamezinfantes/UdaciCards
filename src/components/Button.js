import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'
import Theme from '../theme'

export default class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
    onPress: PropTypes.func,
    primary: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }
  
  static defaultProps = {
    primary: false
  }

  onPressButton = () => {
    this.props.onPress && this.props.onPress()
  }

  render() {
    const { primary, color } = this.props;
    return (
      <TouchableNativeFeedback onPress={this.onPressButton}>
        <View style={[
          styles.button,
          primary && styles.primaryButton,
          color && {backgroundColor: color, borderColor: color}]}>
          <Text style={[
            styles.buttonText,
            primary && styles.primaryButtonText,
            color && {color: Theme.colors.text}]}>
            { this.props.title }
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
  },
  buttonText: {
    color: Theme.colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
  },
  primaryButtonText: {
    color: Theme.colors.text,
  }
})