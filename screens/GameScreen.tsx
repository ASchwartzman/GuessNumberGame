import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import { generateRandomNumberBetween } from '../utils/utils'
import GuessLogItem from '../components/game/GuessLogItem'

type Props = {
  userNumber: number
  setGameOver: (rounds: number) => void
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, setGameOver }: Props) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, setGameOver])

  useEffect(() => {
    ;(minBoundary = 1), (maxBoundary = 100)
  }, [])

  const handleGuessDirection = (direction: 'higher' | 'lower') => {
    switch (direction) {
      case 'higher':
        if (userNumber < currentGuess) {
          Alert.alert('Stop cheating mothefucker!')
          break
        }
        minBoundary = currentGuess + 1
        break
      case 'lower':
        if (userNumber > currentGuess) {
          Alert.alert('Stop cheating mothefucker!')
          break
        }
        maxBoundary = currentGuess
        break
    }
    const newRndNum = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )

    setCurrentGuess(newRndNum)
    setGuessRounds((prevGuessRounds) => [newRndNum, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuessDirection('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuessDirection('higher')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logList}>
        <FlatList
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}
          data={guessRounds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GuessLogItem
              guessNumber={item}
              roundNumber={guessRoundsListLength - index}
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  logList: {
    marginTop: 10,
    flex: 1,
  },
})

export default GameScreen
