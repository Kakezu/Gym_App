import React, { useEffect, useState } from 'react'
import colors from '../assets/colors/colors';
import { KeyboardAvoidingView, Pressable, View, StyleSheet, Text, Keyboard, Image, TextInput} from 'react-native';
import gymAppLogo from "../assets/images/gym_app_logo.jpg"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"


export default function RegisterScreen({navigation}) {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("HomeScreen")
            }
        })

        return unsubscribe
    }, [])

    const handleSubmit = () => {
        if (password !== passwordAgain) {
            alert("Passwords don't match");
        } else {
            handleSignUp()
        }
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
            <View style={styles.mainWrapper}>
                <Image source={gymAppLogo} style={styles.gymAppLogo}/>
                <View style={styles.infoWrapper}>
                    <Text style={styles.registerTitle}>Register</Text>
                    <Text style={styles.registerText}>Please fill out the necessary information</Text>
                    {/* <TextInput
                        placeholder='First Name'
                        value={firstName} 
                        onChangeText={text => setFirstName(text)}
                        style={styles.input}/>
                    <TextInput
                        placeholder='Last Name'
                        value={lastName} 
                        onChangeText={text => setLastName(text)}
                        style={styles.input}/> */}
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
                    <TextInput
                        placeholder='Enter Password Again'
                        value={passwordAgain} 
                        onChangeText={text => setPasswordAgain(text)}
                        style={styles.input}
                        secureTextEntry/>
                    <View>
                    <Pressable onPress={() => handleSubmit()} style={[styles.button, styles.button]}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </Pressable>
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
    },
    mainWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginVertical: 35,
        marginHorizontal: 15,
        borderRadius: 5,
    },
    gymAppLogo: {
        width: 35,
        height: 35,
        alignSelf: 'flex-end',
        margin: 25,
    },
    infoWrapper: {
        marginTop: 100,
        marginHorizontal: 30,

    },
    registerTitle: {
        fontSize: 36
        // Semibold

    },
    registerText: {
        fontSize: 16

    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
        borderColor: colors.darkBlue,
        borderWidth: 1,
    },
    button: {
        backgroundColor: colors.lightBlue,
        width: "70%",
        paddingVertical: 15,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: "center",
        marginTop: 50,
    },
    buttonText: {
        color: "white"
    }
})
