import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import RecipeDetail from "@/components/recipeComponents/RecipeDetail";
import { useLocalSearchParams } from "expo-router";

export default function RecipeDetailPage() {
    
  const { title } = useLocalSearchParams();

  return (
    <View>
      <Text>Recipe Detail: {title} </Text>
      <RecipeDetail />
    </View>
  );
}