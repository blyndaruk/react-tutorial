import React, { useContext, useState } from 'react';
import BaseInput from '../components/UI/Input';
import BaseButton from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function signIn (e) {
    e.preventDefault()
    if (login?.length && password?.length) {
      setIsAuth(true)
      localStorage.setItem('is_auth', 'true')
      navigate('/posts')
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Log in page</h1>
        <form onSubmit={signIn}>
          <BaseInput type="text" placeholder="login" onChange={(e) => setLogin(e.target.value)} />
          <BaseInput type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <br/>
          <BaseButton type="submit">Sign In</BaseButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
