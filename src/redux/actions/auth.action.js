import firebase from 'firebase/app';

import auth from '../../firebase';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOAD_PROFILE, LOGIN_FAIL, LOG_OUT } from '../actionTypes';

export const login = () => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    const res = await auth.signInWithPopup(provider)

    // console.log('response', res)

    const accessToken = res.credential.accessToken
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    }

    // console.log('profile', profile)

    sessionStorage.setItem('youtube-access-token', accessToken)
    sessionStorage.setItem('youtube-user', JSON.stringify(profile))


    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    })

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    })

  } catch(error) {
    console.log(error.mmessage)
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    })
  }
}

export const log_out = () => async dispatch => {
   await auth.signOut()
   dispatch({
     type: LOG_OUT,
   })
   
   sessionStorage.removeItem('youtube-access-token')
   sessionStorage.removeItem('youtube-user')
}