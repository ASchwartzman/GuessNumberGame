import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Inter_900Black } from '@expo-google-fonts/inter'

import Colors from './utils/constants/colors'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [isGameOver, setIsGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({ Roboto_500Medium })

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  function handleGuessRounds(rounds: number) {
    setGuessRounds(rounds)
  }

  function handleGameOver(rounds: number) {
    setIsGameOver(true)
    setGuessRounds(rounds)
  }

  function restartGame() {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} setGameOver={handleGameOver} />
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={restartGame}
      />
    )
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        imageStyle={{ opacity: 0.15 }}
        style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
})
