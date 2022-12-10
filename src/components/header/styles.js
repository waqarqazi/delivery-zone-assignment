import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const makeStyles = () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 50,
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#2f79f6',
      //  shadowColor: '#000',
      // shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    backIcon: {
      width: 30,
      height: 30,
    },
    addIcon: {
      width: 40,
      height: 40,
    },
    title: {
      marginLeft: 5,
      fontSize: RFValue(16),
      color: '#fff',
      fontWeight: 'bold',
    },
  });
export default makeStyles;
