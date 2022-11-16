import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontExtraLight = props => {
  return (
    <TextHOC {...props} style={[styles.MontExtraLight, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontExtraLight;