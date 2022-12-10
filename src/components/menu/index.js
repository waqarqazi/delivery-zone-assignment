import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SCREENS from 'utils/constants';

import makeStyles from './styles';
import AuthContext from 'utils/auth-context';
import {userService} from 'services/auth-service';

const Menu = props => {
  const styles = makeStyles();
  const navigation = useNavigation();
  const auth = React.useContext(AuthContext);
  const logout = async () => {
    try {
      const result = await userService.logout();
      if (result.message == 'Logged Out') {
        auth.authContext.signOut();
      } else {
        alert(JSON.stringify(result));
      }
    } catch (e) {
      alert(JSON.stringify(e));
      auth.authContext.signOut();
    }
  };

  return (
    <View style={styles.container}>
      {/* divider */}
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ALL_DRIVER)}
        style={styles.singleItem}>
        <>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>CRUD Operation Drivers</Text>
          </View>
          <View style={styles.iconWithSecondText}></View>
        </>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ADD_DRIVER)}
        style={styles.singleItem}>
        <>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>Add Driver</Text>
          </View>
        </>
      </TouchableOpacity>
      {/* divider */}
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.PAGINATION)}
        style={styles.singleItem}>
        <>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>Pagination Test</Text>
          </View>
        </>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity onPress={() => logout()} style={styles.singleItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
