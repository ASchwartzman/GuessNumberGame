import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../utils/constants/colors'

type Props = {
  onPickNumber: (number: number) => void
  children?: React.ReactNode
}

function StartGameScreen({ children, onPickNumber }: Props) {
  const [inputNumber, setInputNumber] = useState('')

  function numberInputHandler(inputText: string) {
    setInputNumber(inputText)
  }

  function resetHandler() {
    setInputNumber('')
  }

  function confirmHandler() {
    const number = parseInt(inputNumber)

    if (inputNumber === '' || number < 0 || number > 100) {
      Alert.alert('Invalid Number', 'Please enter a number between 0 and 100', [
        { text: 'OK', style: 'destructive', onPress: resetHandler },
      ])
      return
    }

    //switch screen
    onPickNumber(number)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={inputNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default StartGameScreen
