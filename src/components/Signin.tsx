import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native';
import SizedBox from '../types/Sizebox';
import { AuthContext } from '../Providers/AuthProvider';

interface SigninProps {
  email: string;
  password: string;
}

let Image_Http_URL ={ uri: 'https://res.cloudinary.com/swizce/image/upload/v1620702365/Swizce/icons/swizce_aez2ms.png'};

//Style Components
function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#388966',
      borderRadius: 8,
      height: 44,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
    },
    form: {
      alignItems: 'center',
      backgroundColor: '#daf7ec',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: 'teal', 
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: 'white',
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: 'orange',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
    },
    textButton: {
      color: 'orange',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    textInput: {
      color: 'teal',
      fontSize: 14,
      flex: 1,
    },
    title: {
      color: 'teal',
      fontSize: 30,
      fontWeight: '700',
      lineHeight: 34,
    },
    invitelink: {
      alignItems: 'center',
    }
  });
}

const Signin: React.FC<SigninProps> = () => {
  const {signin} = useContext(AuthContext)
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const { control, handleSubmit } = useForm<SigninProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    Alert.alert('Data', `Email: ${email}\nPassword: ${password}`);
  });


  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >
            <Image source={Image_Http_URL} style = {{height: 64, resizeMode : 'stretch', margin: 5 }} />
            <SizedBox height={76} />
            <Text style={styles.subtitle}>One More Thing...!</Text>
            
            <SizedBox height={36} />

            <Pressable onPress={() => emailInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Email:</Text>

                <Controller
                  control={control}
                  name="email"
                  render={({ onBlur, onChange, value}: any) => (
                    <TextInput
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    ref={emailInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    value={value}
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <Pressable onPress={() => passwordInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Password:</Text>

                <Controller
                  control={control}
                  name="password"
                  render={({ onBlur, onChange, value}: any) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCompleteType="password"
                      autoCorrect={false}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={onSubmit}
                      ref={passwordInput}
                      returnKeyType="done"
                      secureTextEntry
                      style={styles.textInput}
                      textContentType="password"
                      value={value}
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.textButton}>Forgot password?</Text>
            </View>

            <SizedBox height={16} />
            
            <TouchableOpacity onPress={() => {
                signin()
            }} >
              <View style={styles.button}>
                <Ionicons name="ios-log-in-outline" size={32} color="white" />
              </View>
            </TouchableOpacity>

            <SizedBox height={16} />

            <View style={styles.invitelink}>
              <Text style={styles.subtitle} onPress={() => {
                // navigation.navigate('Signup')
                console.log("invite me, Plz?")
              }}>
              Get Invite Link</Text>
            </View>

          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>    
    </TouchableWithoutFeedback>
  )
}

export default Signin;
