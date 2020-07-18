import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState(''),
        [searchApi, results, errorMessage] = useResults(),

        filterResultsByPrice = price => {
            return results.filter(result => result.price === price);
        };

    return <>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />
        </ScrollView>
    </>;
};

const styles = StyleSheet.create({});

export default SearchScreen;