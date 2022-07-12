import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';

const ContactsScreen = () => {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ filteredContacts, setFilteredContacts ] = useState(dummyContacts);

    useEffect(() => {
        const newContacts = dummyContacts.filter(
            contact => contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredContacts(newContacts);
    }, [searchTerm]);

    console.warn(searchTerm);

    return (

        <View style={styles.page}>

            <TextInput 
                value={searchTerm} 
                onChangeText={setSearchTerm} 
                style={styles.searchInput} 
                placeholder="Search...." 
            />

            <FlatList 
                data={filteredContacts}
                renderItem={({item}) => {
                    <Text style={styles.contactName}>{item.user_display_name}</Text>
                }}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
            />

            

        </View>

    );
};

const styles = StyleSheet.create({

    page: {
        padding: 15,
    },

    contactName: {
        fontSize: 16,
        marginVertical: 10,
    },

    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: '#f0f0f0',
    },  

    searchInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5, 
    },



});

export default ContactsScreen;