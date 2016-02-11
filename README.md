# react-native-starter-kit
React Native starter kit - architecture proposal for iOS/Android application 
Functionality are grouped by modules and can be easily scaled  

Example application contains three different pages, navigation between them + loader and async tasks simulation

----------
#### Using:
`redux` - Flux implementation
`redux-thunk` - middleware for async stuff
`react-native-router-flux` - simple, scalable, configurable router for React Native
`fbjs` - provides @providesModule directive for simpler dependency management  

----------
#### Note:
* Root `actions.js` file groups all actions to avoid relative dependencies mess.
* `commonStyles.js` stores all common styles to make it simplier to avoid duplication in presentational components

----------
#### Plans to add:
`AsyncStorage` and `redux-persist` to show example of offline-first app