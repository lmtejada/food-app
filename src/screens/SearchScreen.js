import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState(''),
        [searchApi, results, errorMessage] = useResults();

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        <Text>Found {results.length} results</Text>
    </View>;
};

const styles = StyleSheet.create({});

export default SearchScreen;