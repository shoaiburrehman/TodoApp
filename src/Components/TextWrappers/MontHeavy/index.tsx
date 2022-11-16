import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontHeavy = props => {
  return (
    <TextHOC {...props} style={[styles.MontHeavy, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontHeavy;