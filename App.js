import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VideoPickerScreen from './screens/VideoPickerScreen';
import VideoTrimScreen from './screens/VideoTrimScreen';
import VideoPreviewScreen from './screens/VideoPreviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Picker">
            <Stack.Screen name="Picker" component={VideoPickerScreen} />
            <Stack.Screen name="Trim" component={VideoTrimScreen} />
            <Stack.Screen name="Preview" component={VideoPreviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
