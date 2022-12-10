import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './styles';
import {userService} from 'services/auth-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from 'utils/auth-context';
import SCREENS from 'utils/constants';
export default function LoginScreen({navigation}) {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {}, []);
  const onLoginPress = async () => {
    const result = await userService.login({
      email: email,
      password: password,
    });
    console.log('result', result);
    if (result.token) {
      await AsyncStorage.setItem('token', result.token);
      auth.setUserData(result?.user);
      auth.authContext.signIn(result.token);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginScreenContainer}>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Assignment</Text>
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
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.noAccountTxt}>
            <Text
              style={{
                color: '#000000',

                fontSize: 15,
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.REGISTER)}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 15,
                }}>
                {' '}
                sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
