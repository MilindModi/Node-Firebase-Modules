/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import bgMessaging from './src/FirebaseConfig';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line