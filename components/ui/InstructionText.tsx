import React from 'react'
import { StyleProp, TextStyle, StyleSheet, Text } from 'react-native'
import Colors from '../../utils/constants/colors'

type Props = {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export default function InstructionText({ children, style }: Props) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'Roboto_500Medium',
    color: Colors.accent500,
    fontSize: 18,
    letterSpacing: 2,
  },
})
