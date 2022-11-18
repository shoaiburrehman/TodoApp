import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import InputField from '../../Components/InputField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { generalImages } from '../../Assets/images';
import GradientButton from '../../Components/GradientButton';
import ResponsePopup from '../../Components/Popups/ResponsePopup';
import { renderHeaderTitle } from '../../Navigation/NavigationHeader';

const AddTodoScreen = (props) => {
  let keyword = props?.route?.params?.keyword;
  const [name, setName] = useState('');
  const [email, setEmail] = useState( '');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const generalModalRef = useRef();

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
        <InputField 
          title="Deadline" 
          placeholder="Enter Deadline" 
          value={subject}
          onChangeText={setSubject}
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
    </View>
  );
};

export default AddTodoScreen;
