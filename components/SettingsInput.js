import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles';

export default function SettingsInput({ placeholder, onChangeText }) {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.setSettingsInput}
            onChangeText={(value) => onChangeText(value)}
            keyboardType="numeric"
          />
    )
}