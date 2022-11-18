import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Image, Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import styles from './styles';
import InputField from '../../Components/InputField';
import { generalImages } from '../../Assets/images';
import GradientButton from '../../Components/GradientButton';
import ResponsePopup from '../../Components/Popups/ResponsePopup';
import { renderHeaderTitle } from '../../Navigation/NavigationHeader';
import TouchableInput from '../../Components/TouchableInput';

const AddTodoScreen = (props) => {
  let keyword = props?.route?.params?.keyword;
  const [name, setName] = useState('');
  const [email, setEmail] = useState( '');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const generalModalRef = useRef();
  let formatDate = moment(date).format('DD/MM/YYYY')

  useLayoutEffect(() => {
    if(keyword){
      props.navigation.setOptions({
        headerTitle: () => renderHeaderTitle(keyword),
      });
    }
  }, [props.navigation, keyword]);

  const renderFields = () => {
    return (
      <View style={styles.fieldsView}>
        <InputField 
          title="Title" 
          placeholder="Enter Title" 
          value={name}
          onChangeText={setName}
        />
        <InputField 
          title="Status" 
          placeholder="Enter Status" 
          value={email}
          onChangeText={setEmail}
        />
        <TouchableInput 
          title="Deadline" 
          placeholder="Enter Deadline" 
          value={formatDate ? formatDate : null}
          onPress={() => setOpen(true)}
        />
        <InputField 
          title="Description" 
          placeholder="Enter Description" 
          multiline={true}
          textAlignVertical="top"
          textInputStyle={styles.textInputStyle} 
          value={message}
          onChangeText={setMessage}
        />

        <GradientButton
          text={"Submit"}
          style={[styles.btn]} 
          textStyle={styles.btnText}
          onPress={() => generalModalRef?.current?.show()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderFields()}
      </KeyboardAwareScrollView>
      <ResponsePopup
        reference={generalModalRef}
        title={'Task Added'}
        subTitle={'Your Task Has Been Added Successfully!'}
        image={generalImages.messageSent}
        primaryTitle={'OK'}
        //onAccept={handleOnCancel}
      />
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  );
};

export default AddTodoScreen;
