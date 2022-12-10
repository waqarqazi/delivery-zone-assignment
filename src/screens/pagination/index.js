import {Header} from 'components';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
const Pagination = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${offset}&size=5`)
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson', responseJson);
        setOffset(offset + 1);
        setDataSource([...dataSource, ...responseJson.data]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        Name: {item.name}
        {','}
        Trips: {item.trips}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = item => {
    alert(JSON.stringify(item));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Pagination'} back={true} />
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pagination;
