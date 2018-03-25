import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'
import Theme from '../theme'
import { MaterialIcons } from '@expo/vector-icons';


export default class Fab extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
  }
  
  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onPress}>
        <View style={styles.button}>
          <MaterialIcons size={32} color="#fff" name="add" />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const BUTTON_SIZE = 56;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
    borderRadius: BUTTON_SIZE / 2,
    bottom: 16,
    elevation: 4,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    width: BUTTON_SIZE,
  }
})
