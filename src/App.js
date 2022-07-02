import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './components/Home';
import AddUser from './components/AddUser';
import { useEffect, useState } from 'react';


function App() {

  let initUser;
  if(localStorage.getItem("users") === null ) {
    initUser = [];
  } else {
    initUser = JSON.parse(localStorage.getItem("users"));
  }

  const [ users, setUsers ] = useState(initUser);

  useEffect( ()=> {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users] )

  const addUser = (fullname, email, phone) => {
    console.log("adding", fullname)
    let id;
    if(users.length === 0 ) {
      id = 1;
    } else {
      id = users[users.length-1].id+1;
    }

    const newUser = {
      id: id,
      name: fullname,
      email: email, 
      phone: phone
    }
    console.log(newUser)
    setUsers([...users, newUser]);
  }

  const onDelete = ( user ) => {
    console.log("I'm in delete");
      setUsers( users.filter( (e) => {
        return e !== user;
      }
    ));
    localStorage.setItem('users', JSON.stringify(users));

  }

  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home  users={users} onDelete={onDelete}/>}/>
          <Route exact path='/adduser' element={<AddUser addUser={addUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
