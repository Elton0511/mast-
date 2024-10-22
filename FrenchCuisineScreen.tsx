import { useNavigationContainerRef } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

interface Dish {
  id: number;
  name: string;
  description: string;
  course: string;
  price: number;
}

const FrenchCuisineScreen = () => {
  const navigationRef = useNavigationContainerRef(); // Call the hook here
  const [dishes, setDishes] = useState<Dish[]>([
    { id: 1, name: 'Coq au Vin', description: 'Chicken cooked in red wine', course: 'Main', price: 20 },
    { id: 2, name: 'Bouillabaisse', description: 'Fish soup from Marseille', course: 'Starter', price: 15 },
    // ...
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>French Cuisine</Text>
      <FlatList
        data={dishes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(`Selected dish: ${item.name}`)}>
            <Text style={styles.dish}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price} €</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Back" onPress={() => navigationRef.goBack()} /> // Use the navigationRef here
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dish: {
    fontSize: 18,
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FrenchCuisineScreen;