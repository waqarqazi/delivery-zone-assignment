import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import SCREENS from 'utils/constants';
const Header = ({back, title, add}) => {
  const navigations = useNavigation();
  const styles = makeStyles();

  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity
          borderless
          style={styles.ripple}
          onPress={() => navigations.goBack()}
          rippleColor={'#8493AE20'}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {add && (
        <>
          <TouchableOpacity
            onPress={() => navigations.navigate(SCREENS.ADD_DRIVER)}
            style={{
              position: 'absolute',
              right: 10,
              flexDirection: 'row',
            }}>
            <Image
              style={styles.addIcon}
              source={require('../../assets/addIcon.png')}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
