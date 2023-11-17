import React, { useEffect, useState } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, Pressable  } from 'react-native';
import colors from '../assets/colors/colors';
import gymAppLogo from "../assets/images/gym_app_logo.jpg"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"




export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("HomeScreen")
            }
        })

        return unsubscribe
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Logged in with:", user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Email or password wrong!")
        });
    }

    return (
        <Pressable onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>FitZone</Text>
                    <Image source={gymAppLogo} style={styles.titleLogo}/>
                </View>
                
                <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}/>

                <TextInput
                    placeholder='Password'
                    value={password} 
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry/>
                </View>

                <View styles={styles.buttonWrapper}>
                    <Pressable onPress={() => handleLogin()} style={styles.button}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("RegisterScreen")} style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkBlue,
    },
    titleWrapper: {
        marginBottom: 40,
        alignItems: "center",
    },
    titleLogo: {
        width: 200,
        height: 200,
        marginBottom: 20,

    },
    titleText: {
        color: "white",
        fontSize: 40,
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30
    },
    buttonWrapper: {
    },
    button: {
        backgroundColor: colors.lightBlue,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 50,
    },
    buttonOutline: {
        backgroundColor: colors.darkBlue,
        marginTop: 20,
        borderColor: "white",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
    },

})