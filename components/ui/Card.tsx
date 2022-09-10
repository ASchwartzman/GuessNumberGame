import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../utils/constants/colors'

type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Android specific concept
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
