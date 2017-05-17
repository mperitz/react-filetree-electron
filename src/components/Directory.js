import React from 'react';
import FontAwesome from 'react-fontawesome';

import { deleteNonFontAwesomeKeys } from '../utils/helpers';

export default (props) => {

  // FontAwesome component will throw an error if it doesn't recognize a property name.
  // The following code deletes foreign properties to pass down to the Icon component.
  const fontAwesomeProps = deleteNonFontAwesomeKeys(props);

  const nameOpen = props.theme === 'dark' ? 'folder-open' : 'folder-open-o';
  const nameClosed = props.theme === 'dark' ? 'folder' : 'folder-o';

  return (
    props.visible ?
    <FontAwesome className="icon directory" name={nameOpen} {...fontAwesomeProps} />
    :
    <FontAwesome className="icon directory" name={nameClosed} {...fontAwesomeProps} />
  )
}
