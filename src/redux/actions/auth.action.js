import firebase from 'firebase/app';

import auth from '../../firebase';

export const login = () => async dispatch => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    const res = await auth.signInWithPopup(provider)

    console.log('response', res)
  } catch(error) {

  }
}