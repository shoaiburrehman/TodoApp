import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontSemiBold = props => {
  return (
    <TextHOC {...props} style={[styles.MontSemiBold, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontSemiBold;