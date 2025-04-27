import { Stack } from 'expo-router';
import './global.css';

import { StatusBar } from 'react-native';

export default function _Layout() {
  return (
    <>
      <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="messages/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  )
}
