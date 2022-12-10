import React, {useState, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, FlatList} from 'react-native';
import styles from './style';
import {Header} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {getDriverData} from '../../redux/actions/user-actions';
import Card from 'components/card/card';
import {appService} from 'services/app-service';

const DriverDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // Set loading to true on component mount
  console.log('id', route?.params?.id);
  const getData = async () => {
    const res = await appService.getDriverDetails(route?.params?.id);
  };
  useEffect(() => {
    (async () => {
      const res = await appService.getDriverDetails(route?.params?.id);
      setData(res);
    })();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.main}>
      <Header title={'Driver Detail'} back={true} />
      <View style={styles.flatListView}>
        <Card item={data} />
      </View>
    </View>
  );
};

export default DriverDetail;
