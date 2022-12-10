import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect, useContext} from 'react';
import {View, Text, Button, ActivityIndicator, FlatList} from 'react-native';
import styles from './style';
import Card from '../../components/card/card';
import AuthContext from 'utils/auth-context';
import {userService} from 'services/auth-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Menu} from 'components';
const Main = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false); // Set loading to true on component mount
  const [users, setUsers] = useState([]);
  const auth = useContext(AuthContext);
  useEffect(() => {}, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>CRUD Operations</Text>

      <View style={styles.flatListView}>
        {/* <FlatList data={users} renderItem={({item}) => <Card item={item} />} /> */}
        <Menu />
      </View>
    </View>
  );
};

export default Main;
