import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id'),
        [result, setResult] = useState(null),

        getResult = async(id) => {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <View>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />;
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginLeft: 15,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15
    }
});

export default ResultsShowScreen;