import { merge } from 'lodash';

const mergeStyleObjects = (styleObj1, styleObj2) => {
  return merge({}, styleObj1, styleObj2);
}

module.exports = {
  mergeStyleObjects
};
