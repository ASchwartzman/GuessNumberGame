import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../utils/constants/colors'

type Props = {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto_500Medium',
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
})
