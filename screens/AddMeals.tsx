import React from 'react';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AddMeals() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleAddMeal = async () => {
    if (!name || !calories) {
      Alert.alert('Error', 'Please enter a meal name and calories.');
      return;
    }

    setName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');

    Alert.alert('Success', 'Meal added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Meal</Text>

      <TextInput
        style={styles.input}
        placeholder="Meal name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Calories"
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
        underlineColorAndroid="none"
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Protein (g)"
          keyboardType="numeric"
          value={protein}
          onChangeText={setProtein}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Carbs (g)"
          keyboardType="numeric"
          value={carbs}
          onChangeText={setCarbs}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Fat (g)"
          keyboardType="numeric"
          value={fat}
          onChangeText={setFat}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  rowInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#2a2a4a',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
