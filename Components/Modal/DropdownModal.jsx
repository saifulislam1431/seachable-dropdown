import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { Button, Icon, Portal, TextInput, useTheme } from 'react-native-paper';

const DropdownModal = ({ visible, hideModal, setSearchValue, data, searchableProperty }) => {
    const [filterData, setFilterData] = useState(data);
    const [filterText, setFilterText] = useState("");
    // const { theme } = useTheme()
    let property = searchableProperty;
    // console.log(data);
    const handleSetValueAndModalOff = (text) => {
        setSearchValue(text);
        hideModal()
    }

    const handleFilter = () => {
        if (filterText === "") {
            setFilterData(data)
        } else {
            const newData = data?.filter(dt => dt[property] === filterText);
            setFilterData(newData)
        }
    }

    useEffect(() => {
        handleFilter()
    }, [filterText])

    return (
        <ScrollView>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} style={styles.modalContainer}>
                    <TouchableOpacity onPress={hideModal}>
                        <Icon
                            source="close"
                            color={"#F52D56"}
                            size={40}
                        />
                    </TouchableOpacity>
                    <View style={{ width: "100%", marginVertical: 10 }}>
                        <TextInput
                            // mode="outlined"
                            placeholder="Search User"
                            onChangeText={(text) => setFilterText(text)}
                            right={<TextInput.Icon icon="magnify"
                            />}
                        />
                    </View>

                    <ScrollView style={{ width: "100%" }}>
                        {
                            filterData?.map((info, indx) => <TouchableOpacity onPress={() => handleSetValueAndModalOff(info?.name)} key={indx} style={{ padding: 15, borderBottomWidth: 1, borderColor: "#808080", borderRadius: 12, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 20, }}>{info[property]}</Text>
                                <Icon
                                    source="chevron-right"
                                    color={"#F52D56"}
                                    size={20}
                                />
                            </TouchableOpacity>)
                        }
                    </ScrollView>
                </Modal>
            </Portal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        zIndex: 20
    }
})

export default DropdownModal;
