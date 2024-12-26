import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";

const RecipeDetail = () => {
  const route = useRoute();
  const { id } = useLocalSearchParams();
  /* const { id, title, image } = route.params;*/

  return (
    <View>
      <Text>Recipe Detail: {id} </Text>
    </View>
  );
};

export default RecipeDetail;
