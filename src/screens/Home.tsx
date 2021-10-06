import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View,  StyleSheet, } from 'react-native';
import Center from '../components/Center'
import { AuthContext } from '../Providers/AuthProvider';
import { HomeParamList } from '../utils/HomeParamList';

interface HomeProps {}

const Stack = createStackNavigator<HomeParamList>();

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'teal',
      borderRadius: 8,
      height: 24,
      justifyContent: 'center',
    },
  })

 
}

//Create function component
function Feeds(){
  return(
    <Center>
      <Text>Home Feeds page</Text>
    </Center>
  )
}

const Home: React.FC<HomeProps> = ({}) => {
  const {signout} = useContext(AuthContext);


  const styles = useStyles();

  return (
   <Stack.Navigator>
     <Stack.Screen 
      name="Feed"
      component={Feeds}
      options={{
        headerTitle: "Feeds",
        headerRight: () => {
          return(
            <TouchableOpacity onPress={() => signout()} style={{paddingRight: 10}}>
              <View>
                <Ionicons name="ios-log-out-outline" size={24} color="orange" />
              </View>
            </TouchableOpacity>
            )
        }
      }}
     />
   </Stack.Navigator>
  )
}

export default Home;
