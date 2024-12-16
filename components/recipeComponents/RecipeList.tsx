import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

const recipes = [
  { id: '1', title: 'Recipe 1' },
  { id: '2', title: 'Recipe 2' },
  { id: '3', title: 'Recipe 3' },
  { id: '4', title: 'Recipe 4' },
  { id: '5', title: 'Recipe 5' },
  // Add more recipes as needed
];

const RecipeList = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} title={recipe.title} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 8,
  },
});

export default RecipeList;
