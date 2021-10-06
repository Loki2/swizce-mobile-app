import React from 'react'
import Routes from '../Routes'
import AuthProvider from './AuthProvider'

interface ProviderProps {}

const Provider: React.FC<ProviderProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default Provider;
