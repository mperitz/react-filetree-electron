# Contributing to react-filetree-electron
I would love for you to contribute.  Please use this guide!

## Testing
Please unit test your code!

Your code will not be merged unless you provide tests and they pass.

I have travis automatically checking for all passing tests.

Add tests to test/* using the name convention: *testname*.spec.js

```bash
npm test
```

## Pull requests
Please fork this code to your own account, then clone to your local machine.
Push to your own fork, then use github to make PRs to my master branch.

## Style
In src code, please match my style!

## Development Setup

```bash
git clone https://github.com/mperitz/react-filetree-electron.git
cd react-filetree-electron
npm run build
```

#### To see changes in action:
```bash
# first build
npm run build
# then run the example code
cd example
npm run dev
```
