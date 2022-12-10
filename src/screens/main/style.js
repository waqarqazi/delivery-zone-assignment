import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const {StyleSheet, Dimensions} = require('react-native');

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  flatListView: {
    marginTop: 20,
    flex: 0.5,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
