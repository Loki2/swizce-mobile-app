import React from 'react';
import { View } from 'react-native';

interface Props {}



const Center: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      {children}
    </View>
  )
}

export default Center;
