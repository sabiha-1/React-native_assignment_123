import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    // Load data from AsyncStorage here
    // Use setGridData to update the state with the loaded data
  }, []);

  const handleInputChange = (rowIndex, colIndex, value) => {
    const updatedGridData = [...gridData];
    updatedGridData[rowIndex][colIndex] = value;
    setGridData(updatedGridData);
    // Save data to AsyncStorage here
  };

  return (
    <View style={styles.container}>
      {gridData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TextInput
              key={colIndex}
              style={styles.input}
              value={cell}
              onChangeText={(value) => handleInputChange(rowIndex, colIndex, value)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default Grid;
