import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';
import { Categories, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';


const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }} />
    }

    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMealItem}
                style={{ width: '90%', marginVertical: 10 }}
            />
            {/* <Button
                title="Go to this meal"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail'
                    })
                }} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Pacifico',
    },
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = Categories.find(x => x.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
};

export default CategoryMealsScreen;