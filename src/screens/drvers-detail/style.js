import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const {StyleSheet, Dimensions} = require('react-native');

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  flatListView: {
    marginTop: 20,
    flex: 1,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardView: {
    borderWidth: 0.1,
    margin: 5,
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    justifyContent: 'center',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
