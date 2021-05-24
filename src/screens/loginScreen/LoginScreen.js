import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth.action';

import './_loginScreen.scss';


const LoginScreen = () => {

  const dispatch = useDispatch()

  const handleLogIn = () => {
    dispatch(login())
  }

  return(
    <div className='login'>
      <div className='login__container'>
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="" />
        <button onClick={handleLogIn}>
          Login With Google
        </button>
        <p>This is my Youtube Project</p>
      </div>
    </div>
  )
}

export default LoginScreen;