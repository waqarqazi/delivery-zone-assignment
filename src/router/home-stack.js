import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from 'utils/constants';
import Home from 'screens/main';
import AddDriver from 'screens/add-driver';
import AllDrivers from 'screens/drvers-list';
import DriverDetail from 'screens/drvers-detail';
import Pagination from 'screens/pagination';
const Stack = createNativeStackNavigator();
export default HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREENS.HOME} component={Home} />
    <Stack.Screen name={SCREENS.ADD_DRIVER} component={AddDriver} />
    <Stack.Screen name={SCREENS.ALL_DRIVER} component={AllDrivers} />
    <Stack.Screen name={SCREENS.DRIVER_DETAILS} component={DriverDetail} />
    <Stack.Screen name={SCREENS.PAGINATION} component={Pagination} />
  </Stack.Navigator>
);
