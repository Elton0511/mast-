import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MenuItem {
  id: number;
  name: string; 
}

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: 'French Cuisine' },
    { id: 2, name: 'Japanese Cuisine' },
    { id: 3, name: 'Italian Cuisine' },
    { id: 4, name: 'Normal Menu' },
  ]);

  const handleAddMenuItem = () => {
    const newMenuItem = { id: menuItems.length + 1, name: `New Menu Item ${menuItems.length + 1}` };
    setMenuItems([...menuItems, newMenuItem]);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu List</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <Text style={styles.menuItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add Menu Item" onPress={handleAddMenuItem} />
      <Text style={styles.totalMenuItems}>
        Total Menu Items: {menuItems.length}
      </Text>
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
  menuItem: {
    fontSize: 18,
    padding: 10,
  },
  totalMenuItems: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default HomeScreen;
