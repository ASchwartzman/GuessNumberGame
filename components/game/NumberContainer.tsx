import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utils/constants/colors'

type Props = {
  children?: React.ReactNode
}

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
})
