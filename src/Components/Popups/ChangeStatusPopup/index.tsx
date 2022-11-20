import React, {useState, useImperativeHandle, useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MontBold from '../../TextWrappers/MontBold';
import MontRegular from '../../TextWrappers/MontRegular';
import { statusList } from '../../../Utils/data';
import PopupWrapper from '../PopupWrapper';

interface Props {
  reference: any,
  handleOnSuccess?: () => void,
  subTitle: string,
  primaryTitle: string,
  secondaryTitle: string,
  setStatus: (text: string) => void
}

const ChangeStatusPopup = React.forwardRef((props: Props, ref) => {
  const modalRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    show: () => showModal(),
    hide: () => hideModal(),
  }));

  const showModal = () => {
    modalRef.current.show();
  };

  const hideModal = () => {
    modalRef.current.hide();
  };

  const handleOnSuccess = (text: string) => {
    hideModal();
    if (props?.handleOnSuccess) {
      props.handleOnSuccess();
    }
    if(props.setStatus){
      props?.setStatus(text); 
    }
  };

  return (
    <PopupWrapper 
      reference={modalRef} 
      style={styles.modalStyle} 
      mainContainer={styles.mainContainer}
      containerStyle={styles.containerStyle}
    >
      <View style={styles.container}>
      <View style={styles.headerBarLine} />
        <MontBold style={styles.titleText}>Select Status</MontBold>
        <View style={styles.contentContainer}>
          <View style={styles.marginTop}>
            {statusList.map((item, index) => {
              return(
                <View key={index}>
                  <TouchableOpacity style={styles.touchableSelect} onPress={() => {handleOnSuccess(item?.text)}}>
                    <MontRegular style={styles.touchableText}>{item?.text}</MontRegular>
                  </TouchableOpacity>
                  {index !== statusList?.length - 1 &&
                    <View style={styles.underline} />
                  }
                </View>
              )
              })
            }
          </View>
        </View>
      </View>
    </PopupWrapper>
  );
});

export default ChangeStatusPopup;
