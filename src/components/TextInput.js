import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Theme from '../theme'

const MyTextInput = (props) => {
  const { style, ...rest } = props;
  return (
    <TextInput
      onChange={this.onChangeInput}
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
      { ...rest }
      />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Theme.colors.text,
    borderColor: Theme.colors.divider,
    borderRadius: 6,
    borderWidth: 1,
    color: Theme.colors.primaryText,
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
  },
})


export default MyTextInput