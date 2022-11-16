import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontRegular = props => {
  return (
    <TextHOC {...props} style={[styles.MontRegular, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontRegular;