import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontBold = props => {
  return (
    <TextHOC {...props} style={[styles.MontBold, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontBold;