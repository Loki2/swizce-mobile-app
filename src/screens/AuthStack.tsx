import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavProps, AuthParamList } from '../utils/AuthParamList';
import { Button, Text } from 'react-native';
import Center from '../components/Center';
import Signin from '../components/Signin';




interface Props {}

const Stack = createStackNavigator<AuthParamList>()


function Signup({navigation, route}: AuthNavProps<'Signup'>) {
  return(
    <Center>
      <Text>Create Account Page</Text>
      <Button title="Signin" onPress={() => {
        navigation.navigate('Signin')
      }} />
    </Center>
  )
}

const AuthStack: React.FC<Props> = ({}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Signin"  
          component={Signin}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup}
          options={{
            header: () => null
          }}
        />
      </Stack.Navigator>
  );
}

export default AuthStack;
