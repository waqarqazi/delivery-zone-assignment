import React, {useState} from 'react';

import {styles} from './styles';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {appService} from 'services/app-service';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import {Header} from 'components';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {getDriverData} from '../../redux/actions/user-actions';

export default function AddDriver({navigation, route}) {
  const dispatch = useDispatch();
  const edit = route?.params?.edit;
  const item = route?.params?.item;
  const [name, setName] = useState(item?.name);

  const [age, setAge] = useState(item?.age);
  const [date, setDate] = useState(item?.license_expiry);
  const [phone, setPhone] = useState(item?.phone);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Two Wheeler', value: 'Two Wheeler'},
    {label: 'Four Wheeler', value: 'Four Wheeler'},
  ]);
  const [value, setValue] = useState(
    item?.license_type ? item?.license_type : items[0].value,
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let fDate = moment(date).format('YYYY-MM-DD');
    setDate(fDate);
    hideDatePicker();
    hideDatePicker();
  };

  // /useEffect(() => {}, []);
  const onRegisterPress = async () => {
    if (edit) {
      const result = await appService.updateDriver(item?.id, {
        name: name,
        license_type: value,
        age: age,
        license_expiry: date,
        phone: phone,
      });
      console.log('result update', result);
      if (result) {
        dispatch(getDriverData());
        alert('Updated');
        navigation.goBack();
      }
    } else {
      const result = await appService.addDriver({
        name: name,
        license_type: value,
        age: age,
        license_expiry: date,
        phone: phone,
      });
      console.log('result', result);
      if (result) {
        dispatch(getDriverData());
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.containerView}>
      <Header
        title={edit ? 'Update Driver Details' : 'Add Driver'}
        back={true}
      />
      <ScrollView style={{width: '100%'}}>
        <KeyboardAvoidingView
          style={styles.loginScreenContainer}
          behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginFormView}>
              <TextInput
                placeholder="Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text => setName(text)}
                value={name}
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={1000}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                  borderWidth: 0.3,
                  maxHeight: heightPercentageToDP(18),
                  width: widthPercentageToDP(84),
                }}
                containerStyle={{
                  backgroundColor: '#fff',
                  zIndex: 1000,
                  borderRadius: 10,
                }}
                textStyle={{
                  fontSize: RFValue(12),
                  //   color: colors.text,
                }}
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 0,
                  width: widthPercentageToDP(84),
                }}
              />
              <TextInput
                placeholder="Age"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text => setAge(text)}
                value={age ? age : ''}
                keyboardType={'number-pad'}
              />
              <TouchableOpacity
                style={[styles.loginFormTextInput, {justifyContent: 'center'}]}
                onPress={() => setDatePickerVisibility(true)}>
                <Text style={{color: 'grey'}}>
                  {date ? date : 'Select License Expiry'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={value => {
                  handleConfirm(new Date(value.toISOString()));
                }}
                onCancel={hideDatePicker}
              />

              <TextInput
                placeholder="Phone"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text => setPhone(text)}
                value={phone}
                keyboardType={'number-pad'}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => onRegisterPress()}
                title={edit ? 'Update' : 'Submitted'}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
