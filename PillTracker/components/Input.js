import React from "react";
import {StyleSheet, TextInput,Image} from "react-native";
import { View } from "react-native-web";

const Input = ({PlaceHolder,icon}) => {
    const [text, onChangeText] = React.useState("");
    return (
        <View>
            <Image source={require={icon}}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={PlaceHolder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width:'90%',
        borderWidth: 1.5,
        padding: 10,
        borderRadius:999,
        fontSize:15,
        fontWeight:'bold',
        color:'#C4CACF',
    },
});

export default Input;
