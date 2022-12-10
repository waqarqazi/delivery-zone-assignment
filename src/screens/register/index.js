import React, {useContext, useEffect, useState} from 'react';

import {styles} from './styles';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';
import {userService} from 'services/auth-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from 'utils/auth-context';

export default function Register({navigation}) {
  const auth = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {}, []);
  const onRegisterPress = async () => {
    if (password != confirmPassword) {
      alert('Password not match');
    } else {
      const result = await userService.signup({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });
      console.log('result', result);
      if (result.token) {
        await AsyncStorage.setItem('token', result.token);
        auth.setUserData(result?.user);
        auth.authContext.signIn(result.token);
      }
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Register User</Text>
              <TextInput
                placeholder="Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text => setName(text)}
              />
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
              <TextInput
                placeholder="Confirm Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={text => setConfirmPassword(text)}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => onRegisterPress()}
                title="Register"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
