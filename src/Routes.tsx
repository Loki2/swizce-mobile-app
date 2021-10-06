import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import AppTabs from './components/AppTabs';
import Center from './components/Center';
import { AuthContext } from './Providers/AuthProvider';
import AuthStack from './screens/AuthStack';



interface Props {}





const Routes: React.FC<Props> = ({}) => {
  const {user, signin} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  //use Effect to create check logged in or not
  useEffect(() => {
    AsyncStorage.getItem('user').then((userString) => {
      if(userString){
        //Decode Logged in
        signin()
      }
      setLoading(false)
      console.log(userString)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  if(loading){
    return(
      <Center>
        <ActivityIndicator size="small" />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {
        user ? <AppTabs /> : <AuthStack />
      }
    </NavigationContainer>
  )
}

export default Routes;
