import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

const MontBook = props => {
  return (
    <TextHOC {...props} style={[styles.MontBook, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default MontBook;