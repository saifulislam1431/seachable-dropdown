import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import InputField from '../../Components/InputField/InputField';
import Modal from '../../Components/Modal/DropdownModal';
import { Button } from 'react-native-paper';
import useDemoData from '../../hooks/useDemoData';

const Home = () => {
    const userData = useDemoData();
    const [visible, setVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    console.log(searchValue);
    return (
        <ScrollView>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <View>
                    <InputField mode="outlined" label="Search..." placeholder="Search what you want" icon="chevron-right" showModal={showModal} value={searchValue} />
                </View>

                <ScrollView>
                    <Modal visible={visible} hideModal={hideModal} setSearchValue={setSearchValue} data={userData} searchableProperty="name" />
                </ScrollView >
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20
    },

})

export default Home;
