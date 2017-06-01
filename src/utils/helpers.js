// this helper function iterates over an array of key strings and deletes them from the target object.
const deleteNonFontAwesomeKeys = (targetObj) => {
  const newObj = Object.assign({}, targetObj);
  const targetKeys = Object.keys(targetObj);
  const fontAwesomeProps = {ariaLabel: true, border: true, className: true, fixedWidth: true,
                            flip: true, pulse: true, rotate: true, size: true, spin: true, tag: true};
  targetKeys.forEach(key => {
    if (!fontAwesomeProps[key]) delete newObj[key];
  });
  return newObj;
};

const mergeStyleObjects = (styleObj1, styleObj2) => {
  return Object.assign({}, styleObj1, styleObj2);
}

module.exports = {
  deleteNonFontAwesomeKeys,
  mergeStyleObjects
};
