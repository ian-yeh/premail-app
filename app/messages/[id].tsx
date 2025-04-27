import { View, Text } from 'react-native'
import React from 'react'

import { useLocalSearchParams } from 'expo-router';

const MessageEditor = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{id}</Text>
    </View>
  )
}

export default MessageEditor
