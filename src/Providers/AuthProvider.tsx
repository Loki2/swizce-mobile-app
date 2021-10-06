import React, {useState} from 'react';
import { AsyncStorage } from 'react-native';

interface AuthProviderProps {}

type User = null | { username: string } 

export const AuthContext = React.createContext<{
  user: User,
  signin: () => void,
  signout: () => void
}>({
  user: null,
  signin: () => {},
  signout: () => {}
})

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        signin: () => {
          const fakeUser = {username: "loki"}
          setUser(fakeUser);
          AsyncStorage.setItem('user', JSON.stringify(fakeUser))
        },
        signout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
