import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import Center from '../components/Center';
import { Text } from 'react-native';
import { AppParamList } from '../utils/AppParamList';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';

interface AppTabProps {}

const Tabs = createBottomTabNavigator<AppParamList>();


function Service() {
  return(
    <Center>
      <Text>Service Page</Text>
    </Center>
  )
}

function Scream() {
  return(
    <Center>
      <Text>Scream Page</Text>
    </Center>
  )
}

function Notict() {
  return(
    <Center>
      <Text>Notict Page</Text>
    </Center>
  )
}

function Setting() {
  return(
    <Center>
      <Text>Setting Page</Text>
    </Center>
  )
}

const AppTabs: React.FC<AppTabProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return <Ionicons name={"ios-logo-xing"} size={size} color={color} />
          }else if (route.name === 'Service') {
            return <Ionicons name={"ios-shapes-outline"} size={size} color={color} />
          }else if (route.name === 'Scream') {
            return <Ionicons name={"ios-camera-outline"} size={36} color={color} />
          }else if (route.name === 'Notification') {
            return <Ionicons name={"ios-notifications-outline"} size={size} color={color} />
          }else if (route.name === 'Setting') {
            return <Ionicons name={"ios-cog-outline"} size={size} color={color} />
          }
          //return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'teal',
        inactiveTintColor: 'gray',
      }}
      >
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Service"  component={Service}/>
        <Tabs.Screen name="Scream"  component={Scream}/>
        <Tabs.Screen name="Notification"  component={Notict}/>
        <Tabs.Screen name="Setting"  component={Setting}/>
    </Tabs.Navigator>
  )
}

export default AppTabs;