import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RecipeCardProps {
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title }) => {
  return (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    aspectRatio: 0.5, // Ensure 1:1 aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%', // Adjust width to fit two cards in one row
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RecipeCard;
