import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import {Header} from 'components';
import SCREENS from 'utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getDriverData} from '../../redux/actions/user-actions';
import {appService} from 'services/app-service';

const AllDrivers = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Set loading to true on component mount
  const driverList = useSelector(state => state?.app?.driverData);
  console.log('driverList', driverList);
  useEffect(() => {
    dispatch(getDriverData());
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  const deleteDriver = async id => {
    const result = await appService.deleteDriver(id);
    if (result == 1) {
      dispatch(getDriverData());
    }
  };
  return (
    <View style={styles.main}>
      <Header title={'All Driver'} back={true} add={true} />

      <View style={styles.flatListView}>
        <FlatList
          data={driverList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cardView}
              onPress={() =>
                navigation.navigate(SCREENS.DRIVER_DETAILS, {
                  id: item.id,
                })
              }>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.headingText}>{item?.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '20%',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(SCREENS.ADD_DRIVER, {
                        edit: true,
                        item: item,
                      })
                    }>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/edit.png')}
                      resizeMode={'center'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteDriver(item?.id)}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/delete.png')}
                      resizeMode={'cover'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default AllDrivers;
