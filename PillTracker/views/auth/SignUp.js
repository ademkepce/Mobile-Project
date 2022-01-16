import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native'
import {auth, firestore} from '../../firebase'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const navigation = useNavigation()
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                user.updateProfile({
                    displayName: `${name} ${surname}`,
                });
                console.log("UUID", user)
                console.log('Registered with:', user.email);
            }).then(() => {
                navigation.navigate("SignIn");
        })
            .catch(error => alert(error.message));

    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.textMode3}>
            <Text style={styles.textMode1}>Hoşgeldiniz!</Text>
            <Text style={styles.textMode2}>Lütfen kaydolunuz.</Text>
            </View>
            <View style={styles.inputContainer}>
                <Image source={{uri:'https://www.cumhuriyetocaklari.org/upload/pagesContent/User_icon_BLACK01.png'}} style={{padding:10,margin:5,resizeMode:'stretch',height:25,width:25}}/>
                <TextInput
                    autoCapitalize='none'
                    placeholder="Adınız"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                    
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={{uri:'https://www.cumhuriyetocaklari.org/upload/pagesContent/User_icon_BLACK01.png'}} style={{padding:10,margin:5,resizeMode:'stretch',height:25,width:25}}/>
                <TextInput
                    autoCapitalize='none'
                    placeholder="Soyadınız"
                    value={surname}
                    onChangeText={text => setSurname(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={{uri:'https://cdn.icon-icons.com/icons2/916/PNG/512/Mail_icon-icons.com_71849.png'}} style={{padding:10,margin:5,resizeMode:'stretch',height:25,width:25}}/>
                <TextInput
                    autoCapitalize='none'
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png'}} style={{padding:10,margin:5,resizeMode:'stretch',height:25,width:25}}/>
                <TextInput
                    autoCapitalize='none'
                    placeholder="Şifre"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Üye Ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    textMode1:{
        fontSize:22,
        fontWeight:'bold',
        color:'#2E3E5C',
        
    },
    textMode2:{
        fontWeight:'500',
        fontSize:15,
        color:'#9FA5C0',
    },
    textMode3:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.5,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})
