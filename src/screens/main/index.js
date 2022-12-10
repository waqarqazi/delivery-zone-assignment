import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';
import {Header, Menu} from 'components';
const Main = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.main}>
      <Header title={'Home'} add={true} />
      <View style={styles.flatListView}>
        <Menu />
      </View>
    </View>
  );
};

export default Main;
