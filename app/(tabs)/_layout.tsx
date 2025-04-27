import { ImageBackground, Image, View, Text } from 'react-native'
import React from 'react'

import { Tabs } from 'expo-router';

import { icons } from '@/constants/icons';

const TabIcon = ({ focused, icon, iconFocused, title }: any) => {
  if (focused) {
    return (
      <View
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-7" />
      </View>
    )
  }

  else {
    return (
      <View
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={iconFocused} tintColor="#151312" className="size-7" />
      </View>
    )
  }
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        },
        tabBarStyle: {
          backgroundColor: 'white',
          marginBottom: 44,
          height: 52,
          paddingTop: 16,
          position: 'absolute',
          overflow: 'hidden',
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              iconFocused={icons.homeFocused}
              title="Home"
            />
          )
        }}
      />
      <Tabs.Screen 
        name="messages"
        options={{
          title: 'Messages',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.send}
              iconFocused={icons.sendFocused}
              title="Messages"
            />
          )
        }}
      />
      <Tabs.Screen 
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.settings}
              iconFocused={icons.settingsFocused}
              title="Settings"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default _Layout;
