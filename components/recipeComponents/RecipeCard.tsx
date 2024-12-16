import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

interface RecipeCardProps {
  title: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground 
        source={{ uri: image }} 
        style={styles.recipeItem} 
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.recipeTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%', // Adjust width to fit two cards in one row
    aspectRatio: 1, // Ensure 1:1 aspect ratio
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden', // Ensure content respects border radius
  },
  recipeItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text visibility
    padding: 8,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff', // White text color for better contrast
  },
});

export default RecipeCard;
