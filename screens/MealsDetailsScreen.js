import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { Icon } from 'react-native-elements'

const MealsDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>Meals details Screen</Text>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (<Icon
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} />
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Pacifico',
    },
});

export default MealsDetailsScreen;