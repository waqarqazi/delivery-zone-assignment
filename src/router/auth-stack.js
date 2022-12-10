import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import SCREENS from 'utils/constants';
const Stack = createNativeStackNavigator();
export default AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login">
    <Stack.Screen name={SCREENS.LOGIN} component={Login} />
    <Stack.Screen name={SCREENS.REGISTER} component={Register} />
  </Stack.Navigator>
);
