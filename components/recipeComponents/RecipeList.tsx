import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

const recipes = [
    { id: '1', title: 'Recipe 1', image: 'https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg' },
    { id: '2', title: 'Recipe 2', image: 'https://www.thedenizen.co.nz/wp-content/uploads/2024/07/Website_PostImage_ooh-fa.jpg' },
    { id: '3', title: 'Recipe 3', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg' },
    { id: '4', title: 'Recipe 4', image: 'https://www.thedenizen.co.nz/wp-content/uploads/2022/08/webhero.jpg' },
    { id: '5', title: 'Recipe 5', image: 'https://example.com/image5.jpg' },
    { id: '6', title: 'Recipe 6', image: 'https://example.com/image6.jpg' },
    { id: '7', title: 'Recipe 7', image: 'https://example.com/image7.jpg' },
    { id: '8', title: 'Recipe 8', image: 'https://example.com/image8.jpg' },
    { id: '9', title: 'Recipe 9', image: 'https://example.com/image9.jpg' },
    { id: '10', title: 'Recipe 10', image: 'https://example.com/image10.jpg' },
];

const RecipeList = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} />
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
