import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    color: PropTypes.string,
  }
  
  static defaultProps = {
    primary: false
  }

  render() {
    const { primary } = this.props;
    return (
      <View style={[styles.button, primary && styles.primaryButton, ]}>
        <Text style={[styles.buttonText, primary && styles.primaryButtonText]}>
          { this.props.title }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#000',
  },
  primaryButtonText: {
    color: '#fff',
  }
})