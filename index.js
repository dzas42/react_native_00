import { AppRegistry } from 'react-native';
import App from './App';
// AppRegistry.registerComponent('newProject', () => App);

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


//import AppNavigation from './src/pages/Navigation';
//AppRegistry.registerComponent('newProject', () => AppNavigation);

import AppNavigation from './src/pages/NavigationBottom';
AppRegistry.registerComponent('newProject', () => AppNavigation);

