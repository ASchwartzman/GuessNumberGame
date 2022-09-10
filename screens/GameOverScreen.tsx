import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../utils/constants/colors'

type Props = {
  userNumber: number
  roundsNumber: number
  onStartNewGame: () => void
}

export default function GameOverScreen({
  userNumber,
  roundsNumber,
  onStartNewGame,
}: Props) {
  return (
    <Card>
      <InstructionText style={styles.instructionText}>
        GREAT JOB!
      </InstructionText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton fontSize={24} onPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    // marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
  },
  imageContainer: {
    margin: 36,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginBottom: 24,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  highlight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
})
