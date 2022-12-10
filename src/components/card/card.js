import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card({item}) {
  console.log('item', item);
  return (
    <View style={styles.cardView}>
      <View style={{padding: 10}}>
        <Text style={styles.headingText}>Name</Text>
        <Text style={styles.textSimple}>{item?.name}</Text>
        <Text style={styles.headingText}>Country: </Text>
        <Text style={styles.textSimple}>{item?.country}</Text>
        <Text style={styles.headingText}>Gender: </Text>
        <Text style={styles.textSimple}>{item?.gender}</Text>
        <Text style={styles.headingText}>License Expiry: </Text>
        <Text style={styles.textSimple}>{item?.license_expiry}</Text>
        <Text style={styles.headingText}>License Type: </Text>
        <Text style={styles.textSimple}>{item?.license_type}</Text>
        <Text style={styles.headingText}>phone: </Text>
        <Text style={styles.textSimple}>{item?.phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    borderWidth: 0.1,
    margin: 5,
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.36,
    width: Dimensions.get('window').width * 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textSimple: {
    fontSize: 13,
  },
});
