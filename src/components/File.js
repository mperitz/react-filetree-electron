import React from 'react';
import FontAwesome from 'react-fontawesome';

import { deleteNonFontAwesomeKeys } from '../utils/helpers';

export default (props) => {

  // FontAwesome component will throw an error if it doesn't recognize a property name.
  // The following code deletes foreign properties to pass down to the Icon component.
  const fontAwesomeProps = deleteNonFontAwesomeKeys(props);

  return (
    props.theme === 'dark' ?
    <FontAwesome className="icon file" name="file" {...fontAwesomeProps} />
    :
    <FontAwesome className="icon file" name="file-o" {...fontAwesomeProps} />
  );
};
