import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Vibration,
  TextInput,
} from "react-native";
import styles from "./styles";

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [goal, setGoal] = useState(60);
  const [goalTyped, setGoalTyped] = useState(1);
  const [showGoal, setShowGoal] = useState(false);

  const handlePress = () => {
    time === 10000 && Vibration.vibrate(100);
    count === goal - 1 && Vibration.vibrate(1000);
    setTimeout(() => {
      setCount(count + 1);
      Vibration.vibrate();
    }, time);
  };

  const handleSetTime = (value) => {
    Vibration.vibrate(100);
    setTime(value);
  };

  const resetCounter = () => {
    Vibration.vibrate(100);
    setCount(0);
  };

  const handleShowGoal = () => {
    setShowGoal(!showGoal)
  };

  const handleSetGoal = (value) => {
    setGoal(Number(value));
    handleShowGoal();
  };

  const handleChange = (value) => {
    setGoalTyped(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {time === 0 ? "Sem temporizador" : "Dez Segundos"}
      </Text>
      <View style={styles.buttonsContainer}>
        {time !== 0 ? (
          <TouchableWithoutFeedback onPress={() => handleSetTime(0)}>
            <Text style={styles.normal}>Normal</Text>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => handleSetTime(10000)}>
            <Text style={styles.tenSeconds}>10 Segundos</Text>
          </TouchableWithoutFeedback>
        )}
      </View>
      <TouchableWithoutFeedback onPress={() => handlePress()}>
        <Text style={styles.buttonCount}>{count}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => resetCounter()}>
        <Text style={styles.reset}>Resetar</Text>
      </TouchableWithoutFeedback>
      {!showGoal ? (
        <TouchableWithoutFeedback>
          <Text style={styles.goal} onPress={() => handleShowGoal()}>
            Definir Meta
          </Text>
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.setGoal}>
          <TextInput
            placeholder="Defina a meta"
            style={styles.setGoalInput}
            onChangeText={(value) => handleChange(value)}
            keyboardType="numeric"
          />
          <TouchableWithoutFeedback style={styles.setGoalButton}>
            <Text
              style={styles.setGoalButtonText}
              onPress={() => handleSetGoal(goalTyped)}
            >
              Ok
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}
