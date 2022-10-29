import { useSelector } from 'react-redux';
import './App.css';
import Login from './compenents/Login';
import Logout from './compenents/Logout';
import { selectUser } from './OtherComp/Userslice';

function App() {

  const user = useSelector(selectUser);
  return (
    <>
      <div>{user ? <Logout /> : <Login />} </div>
    </>
  );
}

export default App;
