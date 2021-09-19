import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Vibration,
  TextInput,
} from "react-native";
import styles from "./styles";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      time: 0,
      goal: 3,
      showGoal: false,
    };
  }

  handlePress = () => {
    const { time, count, goal } = this.state;
    time === 10000 && Vibration.vibrate(100);
    count === goal - 1 && Vibration.vibrate(1000);
    setTimeout(
      () =>
        this.setState((prevState) => {
          return {
            ...prevState,
            count: prevState.count + 1,
          };
        }, Vibration.vibrate()),
      time
    );
  };

  setTime = (time) => {
    Vibration.vibrate(100);
    this.setState({
      time,
    });
  };

  resetCounter = () => {
    Vibration.vibrate(100);
    this.setState({
      count: 0,
    });
  };

  showGoal = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        showGoal: !prevState.showGoal,
      };
    });
  };

  setGoal = (value) => {
    this.setState({
      goal: Number(value),
    });
    this.showGoal();
  };

  handleChange = (value) => {
    this.setState({
      goalTyped: value,
    });
  };

  render() {
    const { count, time, showGoal, goalTyped } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.time}>
          {time === 0 ? "Sem temporizador" : "Dez Segundos"}
        </Text>
        <View style={styles.buttonsContainer}>
          {time !== 0 ? (
            <TouchableWithoutFeedback onPress={() => this.setTime(0)}>
              <Text style={styles.normal}>Normal</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => this.setTime(10000)}>
              <Text style={styles.tenSeconds}>10 Segundos</Text>
            </TouchableWithoutFeedback>
          )}
        </View>
        <TouchableWithoutFeedback onPress={() => this.handlePress()}>
          <Text style={styles.buttonCount}>{count}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.resetCounter()}>
          <Text style={styles.reset}>Resetar</Text>
        </TouchableWithoutFeedback>
        {!showGoal ? (
          <TouchableWithoutFeedback>
            <Text style={styles.goal} onPress={() => this.showGoal()}>
              Definir Meta
            </Text>
          </TouchableWithoutFeedback>
        ) : (
          <View style={styles.setGoal}>
            <TextInput
              placeholder="Defina a meta"
              style={styles.setGoalInput}
              value={goalTyped}
              onChangeText={(value) => this.handleChange(value)}
              keyboardType="numeric"
            />
            <TouchableWithoutFeedback style={styles.setGoalButton}>
              <Text style={styles.setGoalButtonText} onPress={() => this.setGoal(goalTyped)}>Ok</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    );
  }
}
