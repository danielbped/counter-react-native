import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Vibration,
  Modal,
} from "react-native";
import styles from "./styles";
import SettingsInput from './components/SettingsInput';

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [goal, setGoal] = useState(60);
  const [goalTyped, setGoalTyped] = useState(60);
  const [timeTyped, setTimeTyped] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const incrementCount = () => {
    const timeInSeconds = time * 1000;
    setTimeout(() => {
      Vibration.vibrate();
      return setCount(count + 1);
    }, timeInSeconds);
  };

  const vibrateOnGoal = () => count === goal - 1 && Vibration.vibrate(1000);

  const tenSecondsVibrate = () => time > 0 && Vibration.vibrate(100);

  const handlePress = () => {
    tenSecondsVibrate();
    vibrateOnGoal();
    incrementCount();
  };

  const resetCounter = () => {
    Vibration.vibrate(100);
    setCount(0);
  };

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleSetSettings = () => {
    setGoal(Number(goalTyped));
    setTime(Number(timeTyped));
    handleShowSettings();
  }

  const handleChangeGoal = (value) => {
    setGoalTyped(value);
  };

  const handleChangeTime = (value) => {
    setTimeTyped(value);
  };

  return (
    <View style={styles.container}>
      <Modal style={styles.modal} visible={showSettings}>
        <TouchableWithoutFeedback>
        <View style={styles.setSettings}>
          <SettingsInput
            placeholder={`Meta atual: ${goal}`}
            onChangeText={ handleChangeGoal }
          />
          <SettingsInput
            placeholder={`Tempo atual: ${time}`}
            onChangeText={ handleChangeTime }
          />
          <TouchableWithoutFeedback>
            <Text
              style={styles.setSettingsButtonText}
              onPress={() => handleSetSettings()}
            >
              Ok
            </Text>
          </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.settedSettings}>
        <Text style={styles.settedSettingsText}>
          {time > 0 ? `${time} segundos` : 'Sem temporizador'}
        </Text>
        <Text style={styles.settedSettingsText}>
          {goal > 0 ? `${goal} repetições` : 'Sem meta'}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={() => handlePress()}>
        <Text style={styles.buttonCount}>{count}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => resetCounter()}>
        <Text style={styles.reset}>Resetar</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Text style={styles.settings} onPress={() => handleShowSettings()}>
          Configurações
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
