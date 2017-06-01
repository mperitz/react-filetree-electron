# react-filetree-electron

### An fully customizable file tree that expands and contracts with the click of a button!

<br/>

## Screenshot

![React Filetree Electron Demo](https://media.giphy.com/media/GPIRkqWzkETJu/giphy.gif)

## Installation

* **Note: requires a node version >= 6 and an npm version >= 3.**

```bash
npm install react-filetree-electron
```

### OR, if using yarn

```bash
yarn add react-filetree-electron
```

## Use

```js
import FileTree from 'react-filetree-electron';
```

### Then just use it like a normal React component.  Make sure to provide a string to act as the directory path.  This is the only required property, but there are many optional properties.  See below.

```jsx
const directory = '/Users/Your-Name-Here/Directory'
<FileTree directory={directory} />
```

## FileTree Props
### All props are optional **except directory**.
| Property         | Type     | Default                                         | Description                                                                                 |
| :--------------- |:--------:| :----------------------------------------------:| :------------------------------------------------------------------------------------------ |
| directory        | string   |                                                 | The directory that acts as the tree root.                                                   |
| onFileClick      | function |                                                 | A function to be performed when a user clicks a file list item (not a directory list item). |
| directoryTheme   | string   | 'light'                                         | Theme for the directory icon                                                                |
| fileTheme        | string   | 'light'                                         | Theme for the file icon                                                                     |
| fileTreeStyle    | object   | { fontFamily: 'sans-serif', listStyle: 'none' } | Merge or change style attributes for the overall file tree                                  |
| directoryStyle   | object   | { marginBottom: 3 }                             | Merge or change style attributes for the directory list items                               |
| fileStyle        | object   | { marginBottom: 3 }                             | Merge or change style attributes for the file list items                                    |
| ariaLabel        | string   |                                                 | react-fontawesome prop - An extra accessibility label to put on the icon                    |
| border           | boolean  | false                                           | react-fontawesome prop - Whether or not to show a border radius                             |
| fixedWidth       | boolean  | false                                           | react-fontawesome prop - Make buttons fixed width                                           |
| flip             | string   | 'false'                                         | react-fontawesome prop - Flip the icon's orientation.                                       |
| pulse            | boolean  | false                                           | react-fontawesome prop - Rotate icon with 8 steps, rather than smoothly                     |
| rotate           | number   |                                                 | react-fontawesome prop - The degress to rotate the icon by                                  |
| size             | string   |                                                 | react-fontawesome prop - The icon scaling size                                              |
| spin             | boolean  | false                                           | react-fontawesome prop - Spin the icon                                                      |
| tag              | string   | span                                            | react-fontawesome prop - The HTML tag to use as a string, eg 'i' or 'em'                    |

## Development

```bash
git clone https://github.com/mperitz/react-filetree-electron.git
cd react-filetree-electron
```

### Please provide unit tests with any pull requests
#### Jest was used for all initial tests, but feel free to use the library of your choice!
#### Use file naming convention: name.spec.js
```bash
npm test
```

#### To see changes in action:
```bash
cd example
npm run dev
```

## Special Thanks
* react-electron-boilerplate was used for the example and for development purposes (https://github.com/chentsulin/electron-react-boilerplate)
* react-fontawesome was used for the directory and file icons (https://github.com/danawoodman/react-fontawesome)

## License
MIT
