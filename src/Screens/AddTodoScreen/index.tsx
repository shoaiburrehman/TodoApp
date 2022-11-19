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
import TouchableInput from '../../Components/TouchableInput';
import ChangeStatusPopup from '../../Components/Popups/ChangeStatusPopup';
import { useCreateTodoHook } from '../../hooks/useCreateTodoHook';
import { isBlank } from '../../Utils/helper';
import { showToast } from '../../Api/HelperFunction';
import { useEditTodoHook } from '../../hooks/useEditTodoHook';

const AddTodoScreen = (props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const [title, setTitle] = useState(taskDetail?.title || '');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const generalModalRef = useRef();
  const setStatusRef = useRef();
  const [createTodoState, createTodoFunc] = useCreateTodoHook();
  const [editTodoState, editTodoFunc] = useEditTodoHook();

  let formatDate = moment(date).format('DD-MM-YYYY')

  useEffect(() => {
    if(createTodoState || editTodoState){
      generalModalRef?.current?.show()
    }
  }, [createTodoState, editTodoState])

  const handleCreate = () => {
    if(isBlank(title)){
      showToast('Please Enter Task Title');
    } else if(isBlank(description)){
      showToast('Please Enter Task Description');
    } else if(isBlank(date)){
      showToast('Please Add Task Deadline');
    } else {
      if(taskDetail){
        if(isBlank(status)){
          showToast('Please add task status');
        } else {
          let data = {
            createdAt: formatDate, 
            deadline: formatDate, 
            description: description, 
            id: taskDetail?.id, 
            status: status, 
            title: title
          }
          console.log('editTodo: ', data)
          editTodoFunc(data, data?.id);
        }
      } else {
        let data = {
          createdAt: formatDate, 
          deadline: formatDate, 
          description: description, 
          id: `Task#${(moment())}`, 
          status: "todo", 
          title: title
        }
        createTodoFunc(data);
      }
    }
  }

  const handleOnAccept = () => {
    if(taskDetail){
      props.navigation.goBack();
    } else {
      setTitle('');
      setDescription('');
    }
  }

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
          value={taskDetail?.deadline && !isDate ? taskDetail?.deadline : (formatDate ? formatDate : null)}
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
          onPress={handleCreate}
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
        onAccept={handleOnAccept}
      />
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setIsDate(true);
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
