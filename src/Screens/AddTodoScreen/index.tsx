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
import ChangeStatusPopup from '../../Components/Popups/ChangeStatusPopup';

const AddTodoScreen = (props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const [title, setTitle] = useState(taskDetail?.title || '');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(taskDetail?.deadline ? new Date(taskDetail?.deadline) : new Date());
  const [open, setOpen] = useState(false);
  const generalModalRef = useRef();
  const setStatusRef = useRef();
  let formatDate = moment(date).format('DD-MM-YYYY')

  // useLayoutEffect(() => {
  //   if(keyword){
  //     props.navigation.setOptions({
  //       headerTitle: () => renderHeaderTitle(keyword),
  //     });
  //   }
  // }, [props.navigation, keyword]);

  const renderFields = () => {
    return (
      <View style={styles.fieldsView}>
        <InputField 
          title="Title" 
          placeholder="Enter Title" 
          value={title}
          onChangeText={setTitle}
        />
        {taskDetail &&
          <TouchableInput 
            title="Status" 
            placeholder="Select Status" 
            value={status ? status : "Select Status"}
            onPress={() => setStatusRef?.current.show()}
          />
        }
        <TouchableInput 
          title="Deadline" 
          placeholder="Select Deadline" 
          value={formatDate ? formatDate : null}
          onPress={() => setOpen(true)}
        />
        <InputField 
          title="Description" 
          placeholder="Enter Description" 
          multiline={true}
          textAlignVertical="top"
          textInputStyle={styles.textInputStyle} 
          value={description}
          onChangeText={setDescription}
        />

        <GradientButton
          text={taskDetail ? "Edit Task" : "Add Task"}
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
        subTitle={taskDetail ? 'Your Task Has Been Updated Successfully!' : 'Your Task Has Been Added Successfully!'}
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
      <ChangeStatusPopup ref={setStatusRef} setStatus={setStatus} />
    </View>
  );
};

export default AddTodoScreen;
