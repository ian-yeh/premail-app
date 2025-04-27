import { FlatList, Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

import { icons } from '@/constants/icons';

export default function Index() {
  return (
    <View className="flex-1 bg-white px-8">
      <Text className="font-poppins text-dark-200 text-5xl mt-24 font-bold">Hi, User 👋</Text>
      <Text className="font-poppins text-dark-100 text-3xl mt-2">How are you doing today?</Text>

      <Link href={`/messages/Hi`} asChild>
        <TouchableOpacity className="bg-blue-100 mt-12 w-100 border py-5 rounded-xl">
          <Text className="font-inter text-xl text-center text-white">Create New Message</Text>
        </TouchableOpacity>
      </Link>

      <View className="flex-row items-center mt-12 justify-between">
        <Text className="font-poppins text-3xl text-dark-200 font-bold">Your drafts</Text>
        <Image source={icons.slider} tintColor="#151312" className="size-8" />
      </View>

      <FlatList />
    </View>
  );
}
