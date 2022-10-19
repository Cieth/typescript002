import React /**{useEffect}**/ from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Form from './components/Inputs';
import UserCard from './components/UserCard';
function App() {
  const { isAuthenticated, user } = useAuth0();
  /* useEffect(() => {
      if(isAuthenticated ){
       axios.post("http://localhost:8080/auth/third-parties",user)
      }  
    },{isAuthenticated}) */
  return (
    <div className='App'>{!isAuthenticated ? <Form /> : <UserCard />}</div>
  );
}

export default App;
