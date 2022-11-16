import React from 'react';
import TextHOC from '../TextHOC/TextHOC';
import styles from './styles';

export default OutfitRegular = props => {
  return (
    <TextHOC {...props} style={[styles.OutfitRegular, props?.style]}>
      {props.children}
    </TextHOC>
  );
};
