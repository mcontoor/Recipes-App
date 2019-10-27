import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Categories } from '../data/dummy-data';
import Colors from '../constants/Colors';



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}>
                <Text style={styles.text} numberOfLines={2}>{itemData.item.title}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <FlatList numColumns={2}
            horizontal={false}
            data={Categories}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Pacifico',
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 3
    },
    text: {
        padding: 15,
        fontFamily: 'Pacifico',
        fontSize: 22,
    }
});

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

export default CategoriesScreen;