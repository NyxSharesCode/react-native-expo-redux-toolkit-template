# react-native-expo-redux-toolkit-template

For those who create [React Native](https://reactnative.dev/) apps using [Expo](https://docs.expo.io/), but want that extra out of the box set up for state management with [Redux Toolkit](https://redux-toolkit.js.org/) and integration of Google Fonts with [expo-google-fonts](https://github.com/expo/google-fonts#install-the-package-for-the-font-you-want).

Includes 
* template file for React Native components for easy copy/paste (just don't forget to replace the placeholder component name!)
* example Redux Toolkit flow: demonstrates how to create state, reducers and actions inside a Redux slice & how to access that state and dispatch actions from the UI

## Requirements

Since this template is basically a somewhat supersized version of an Expo application, it requires [expo-cli](https://docs.expo.io/workflow/expo-cli/).

To install it, run the following command from the terminal: 

`npm install -g expo-cli`

## Getting started with the template

### 1. Clone the repository or download the project's source code

### 2. Install the necessary packages 

Run the following command from the project's folder inside the terminal:

`npm install`

### 3. Start the Expo application  

Run the following command to bundle the application:

`expo start`

Follow the instructions to run the app with the method of your choice ([learn more](https://docs.expo.io/get-started/installation/#2-expo-client-app-for-ios-and)).

*Currently the Redux Toolkit demo application will be displayed when the template is opened.*
*Remove the Example component inside App.js to start with a blank canvas.*

## Getting started with Redux Toolkit

### 1. Write your own reducers with `createSlice` or `createAction` and `createReducer`

To learn more about creating reducers with `createSlice`, check out the [documentation](https://redux-toolkit.js.org/tutorials/basic-tutorial#introducing-createslice) and the example.js file inside the project folder.

To learn more about Redux Toolkit's equivalent to the more traditional Redux Core method of creating reducers, check out the documentation for [`createAction`](https://redux-toolkit.js.org/tutorials/basic-tutorial#introducing-createaction) and [`createReducer`](https://redux-toolkit.js.org/tutorials/basic-tutorial#introducing-createreducer)

### 2. Replace the example reducer inside store.js with your own reducer(s)

When using a **rootReducer**, the reducers object inside `configureStore` can be relaced by the rootReducer:

```javascript
import rootReducer from './rootReducer.js';
const store = configureStore(rootReducer);
```

Reducers inside the rootReducer need to be combined using `combineReducers` though, a step that can be skipped when using the **reducer object** method:

```javascript
import example from './example.js';
import anotherReducer from './anotherReducer.js';
const store = configureStore({
    reducer: {
        example: example,
        anotherReducer: anotherReducer,                   
    }
});
```

Just make sure reducers inside the object are separated by a comma.

### 3. Use the `useSelector` hook from `react-redux` to access state properties inside React Native components

```javascript
import { useSelector } from 'react-redux';
const { counter } = useSelector(state => state.example);
```

```javascript
<Text>{counter}</Text>;
```

### 4. Use the `useDispatch` hook from `react-redux` to dispatch actions inside React Native components

```javascript
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
```

```javascript
<Button onPress={() => dispatch(incrementCounterByOne())} title="+" />
```

## Getting started with `expo-google-fonts`

### 1. Install the font

Run the following command from the project's folder inside the terminal, replacing the `your-font` placeholder with the name of the font

`expo install @expo-google-fonts/your-font expo-font`

Check out [this directory](https://directory.now.sh/) for a complete list of available fonts, their correct font name and font variants (see step below).

### 2. Import the font's variants 

Fonts imported using `expo-google-fonts` cannot be manipulated with properties such as `fontWeight`. 
Instead each font will have one or more font variants, depending on the font, that must all be imported individually.

*(Search for your font in the directory found in the previous step and click to see your font's available variants)*

Inside of the **App.js** file:

* Uncomment lines 10-14 (*Imports necessary to use Google Fonts*) AND lines 22-27 (*Snippets necessary to use Google Fonts*)
* Replace TODO comments on lines 13 and 23 with list of font variants
* Add font name behind the slash of the import on line 14

### 3. Use your custom font

Your Google Font can now be specified as the `fontFamily` for text elements supporting this style property:

*inside a component's style attribute, inside an object*:

```javascript
<Text style={{ fontFamily: 'your-font-variant'}}>
```

*inside a StyleSheet object*:

```javascript
const styles = StyleSheet.create({
  example: {
      fontFamily: 'your-font-variant'
  }
});
```