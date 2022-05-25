# Hummingbird UI
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
A design system created by SES. View the published storybook [here](https://6278e17325a15a004a7ecb09-znxvqpghxt.chromatic.com/?path=/story/usage--page)! 

## Usage
Install MUI with the following:
```bash
npm install @mui/material @emotion/react @emotion/styled
```

Install Hummingbird UI with the following command:
```bash
npm i hummingbird-ui
```

In your `App.js` file, import either the light theme or dark theme from the package.
```javascript
import { lightTheme } from 'hummingbird-ui';
```

In the same `App.js` file, import `ThemeProvider` and `CssBaseline` from the MUI Library.
```javascript
import { ThemeProvider, CssBaseline } from '@mui/material';
```

Wrap your code in the `ThemeProvider` and `CssBaseline` tags with the hummingbird-ui theme of choice.
```javascript
function App() {
  return (
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline/>
        // Your code goes here
    </ThemeProvider>
  );
}

export default App;
```

The customized Hummingbird UI theme is now applied across all your MUI components. Enjoy!

## Chromatic
Collaborators can access Chromatic via this [link](https://www.chromatic.com/builds?appId=6278e17325a15a004a7ecb09).

## Tech Stack
Building components
- [Storybook](https://storybook.js.org/) for UI component developent and auto-generated docs
- [React](https://reactjs.org/) declarative component-centric UI based on [MUI](https://mui.com/), a comprehensive UI library
- [Chromatic](https://www.chromatic.com/) to deploy and host our Storybook safely and securely in the cloud

Maintaining the system
- [NPM](https://www.npmjs.com/) for packaging and distribution

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!