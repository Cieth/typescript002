import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Form from './components/Inputs';
import UserCard from './components/UserCard';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className='App'>{!isAuthenticated ? <Form /> : <UserCard />}</div>
  );
}

export default App;
