import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Vibration } from 'react-native';
import styles from './styles';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      time: 0,
    };
  }

  handlePress = () => {
    const { time } = this.state;
    setTimeout(
      () =>
        this.setState((prevState) => {
          return {
            ...prevState,
            count: prevState.count + 1,
          };
        },
        Vibration.vibrate()
        ),
      time
    );
  };

  setTime = (time) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        time,
      };
    });
  };

  zerarContador = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: 0,
      };
    });
  };

  render() {
    const { count, time } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.tempo}>
          {time === 0 ? 'Sem temporizador' : 'Dez Segundos'}
        </Text>
        <View style={styles.buttonsContainer}>
          {time !== 0 ? <TouchableWithoutFeedback onPress={() => this.setTime(0)}>
            <Text style={styles.normal}>Normal</Text>
          </TouchableWithoutFeedback> :
          <TouchableWithoutFeedback onPress={() => this.setTime(10000)}>
            <Text style={styles.dezSegundos}>10 Segundos</Text>
          </TouchableWithoutFeedback>}
        </View>
        <TouchableWithoutFeedback onPress={() => this.handlePress()}>
          <Text style={styles.buttonCount}>{count}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.zerarContador()}>
          <Text style={styles.reset}>Resetar</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
