import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
    const [loginAttempts, setLoginAttempts] = useState([]);

    const handleLogin = (login, password) => {

        console.log({ login, password })

        users.userName = login;
        users.Password = password;
        setLoggedInUsers((prevUsers) => [...prevUsers, users])
        setLoginAttempts((prevUsers) => [...prevUsers, users])
    }

  return (
    <div className="App">
          <LoginForm onSubmit={handleLogin(login, password)} />
          <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
