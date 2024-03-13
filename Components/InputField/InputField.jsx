import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const InputField = ({ mode, label, placeholder, icon, showModal, value }) => {
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => {
        setInputValue(value);
    }, [value])
    const handleChangeText = (text) => {
        setInputValue(text); // Update the local input value
        // onChange(text); // Notify parent component of the change
    };

    return (
        <View>
            <TextInput
                mode={mode}
                label={label}
                value={inputValue}
                placeholder={placeholder}
                onFocus={showModal}
                onChangeText={handleChangeText}
                right={<TextInput.Icon onPress={showModal} icon={icon}
                />}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default InputField;
