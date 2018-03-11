import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import Theme from '../theme'

const MyStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props} />
    </View>
  )
}

MyStatusBar.defaultProps = {
  backgroundColor: Theme.colors.primaryDark
}

export default MyStatusBar