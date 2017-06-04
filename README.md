# react-filetree-electron

### A fully customizable file tree that expands and contracts with the click of a button!

<br/>

## Screenshot

![React Filetree Electron Demo](https://media.giphy.com/media/GPIRkqWzkETJu/giphy.gif)

## Installation

* **Note: requires node version >= 6 and an npm version >= 3.**

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
| Property         | Type     | Options [default]                                 | Description                                                                                 |
| :--------------- |:--------:| :----------------------------------------------:  | :------------------------------------------------------------------------------------------ |
| directory        | string   |                                                   | The directory that acts as the tree root.                                                   |
| onFileClick      | function |                                                   | A function to be performed when a user clicks a file list item (not a directory list item). |
| directoryTheme   | string   | ['light'], 'dark'                                 | Theme for the directory icon                                                                |
| fileTreeStyle    | object   | [{ fontFamily: 'sans-serif', listStyle: 'none' }] | Merge or change style attributes for the overall file tree                                  |
| directoryStyle   | object   | [{ marginBottom: 3 }]                             | Merge or change style attributes for the directory list items                               |
| fileStyle        | object   | [{ marginBottom: 3 }]                             | Merge or change style attributes for the file list items                                    |

## Development

```bash
git clone https://github.com/mperitz/react-filetree-electron.git
cd react-filetree-electron
npm run build
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

## License
MIT
