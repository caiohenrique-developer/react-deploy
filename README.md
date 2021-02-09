<h1 align="center">
    <img alt="GoBarber" src="src/assets/logo.svg" />
</h1>
<h3 align="center">
  Application for scheduling barber shop services.
</h3>

<br>

<p align="center">
  <a href="#🖼️-app-ui">🖼️ App UI</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🛸-technologies">🛸 Technologies</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#⚠️-prerequisites">⚠️ Prerequisites</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#❔-how-to-use">❔ How To Use</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🔖-badges">🔖 Badges</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🔐-license">🔐 License</a>
</p>

## 🖼️ App UI



<!-- {{ AQUI VAI ENTRAR AS IMAGENS E UM TEXTO RÁPIDO }} -->



## 🛸 Technologies

This project was developed at the [RocketSeat OmniStack Week 7](https://rocketseat.com.br) with the following technologies:

-  [Node.js][nodejs]
-  [Express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [Multer](https://github.com/expressjs/multer)
-  [Socket.io](https://socket.io/)
-  [ReactJS](https://reactjs.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [styled-components](https://www.styled-components.com/)
-  [axios](https://github.com/axios/axios)
-  [React Native](http://facebook.github.io/react-native/)
-  [React Navigation](https://reactnavigation.org/)
-  [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
-  [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker)
-  [react-native-auto-height-image](https://github.om/vivaxy/react-native-auto-height-image)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## ⚠️ Prerequisites

In order to use and test the mobile app on a simulator or on your smartphone, you should've already setup the development environment for React Native applications. You can follow the following article (PT-BR) to setup your environment:

[React Native Environment (Android/iOS)](https://docs.rocketseat.dev/ambiente-react-native/introducao)

## ❔ How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

<details>
<summary>husky</summary>

1. Install husky:
```
npm i husky
```
2. Configure `package.json`:
```
  "husky": {
    "hooks": {
      "commit-msg": "cz-customizable-ghooks"
    }
  }
```

_An example of this setup is in `examples/husky`._
</details>

<br>

```bash
# Clone this repository
$ git clone https://github.com/caiohenrique-developer/instagram-fullStack

# Go into the repository
$ cd instagram-fullStack

# Go into backend
$ cd backend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn dev

# On another terminal, go to the frontend folder
$ cd ../frontend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn start

# On another terminal, go to the mobile folder
$ cd ../mobile

# Install dependencies
$ yarn install

# If you want to run the project on a simulador, start the react-native server as it is
$ react-native start

# On another terminal, install the app on your simulator
# Use the command below for iOS devices
$ react-native run-ios --simulator="iPhone XS Max"

# Use the command below for Android devices
$ react-native run-android

# If you want to run the project on your smartphone, change the baseURL on src/services/api.js to your machine's ethernet adapter IP. Use the ethernet adapter IP if you're on a cable connection or the WiFi adapter IP if you're on a wireless conecction.
# After changing the baseURL, start the react-native server
$ react-native start

# On another terminal, install the app on your smartphone
# Use the command below for iOS devices
$ react-native run-ios

# Use the command below for Android devices
$ react-native run-android
```

## 🔖 Badges

<p align="center">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/caiohenrique-developer/react-deploy">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/caiohenrique-developer/react-deploy">

  <a href="https://www.codacy.com/app/caiohenrique-developer/react-deploy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=caiohenrique-developer/react-deploy&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy Grade" src="https://img.shields.io/codacy/grade/4f87fc059ec846118f2ef2950200b13a.svg">
  </a>

  <a href="https://github.com/caiohenrique-developer/react-deploy/commits/master">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/caiohenrique-developer/react-deploy">
  </a>

  <a href="https://github.com/caiohenrique-developer/react-deploy/releases">
    <img alt="GitHub Releases" src="https://img.shields.io/github/release-date/caiohenrique-developer/react-deploy">
  </a>

  <a href="https://github.com/caiohenrique-developer/react-deploy/tags">
    <img alt="GitHub Tags" src="https://img.shields.io/github/package-json/v/caiohenrique-developer/react-deploy/master">
  </a>

  <a href="https://github.com/caiohenrique-developer/react-deploy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/caiohenrique-developer/react-deploy">
  </a>

  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/caiohenrique-developer/react-deploy">

  <img alt="GitHub License" src="https://img.shields.io/github/license/caiohenrique-developer/react-deploy">

  <a href="https://app.netlify.com/sites/gobarber-react-web/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/dd225487-0a31-4b67-8d9c-8006280cce71/deploy-status">
  </a>
</p>

## 🔐 License
This project is under the MIT license. See the [LICENSE](https://github.com/caiohenrique-developer/react-deploy/blob/develop/LICENSE) for more information.

---

Done with ♥ by myself ☝️ [Get in touch!](https://www.linkedin.com/in/caio-henrique-024627171/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
