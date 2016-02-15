# react-native-starter-kit
React Native starter kit - offline-first architecture proposal for iOS/Android application  
Functionality are grouped by modules and can be easily scaled  

Example application contains three different pages, navigation between them + loader and async tasks simulation

![](https://github.com/philipshurpik/react-native-starter-kit/raw/master/video.gif) 

----------
#### Using:
* `redux` - Flux implementation  
* `redux-thunk` - middleware for async stuff  
* `react-native-router-flux` - simple, scalable, configurable router for React Native  
* `fbjs` - provides @providesModule directive for simpler dependency management   
* `redux-persist` - stores redux state in ReactNative `AsyncStorage`

----------
#### Note:
* Root `actions.js` file groups all actions to avoid relative dependencies mess.
* `commonStyles.js` stores all common styles to make it simplier to avoid duplication in presentational components
* Implements offline-first approach - store redux state in ReactNative `AsyncStorage`
* After Reload if user was authentificated - opens directly HomePage, otherwise LoginPage
 
---------- 
#### Plans to add:
* Tests setup with mocha + sinon + chai