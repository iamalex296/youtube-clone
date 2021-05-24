import firebase from 'firebasse/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9rULod0eWpWh_iv6H_OIvhaMu68u5UlE",
  authDomain: "cloneyoutub-296.firebaseapp.com",
  projectId: "cloneyoutub-296",
  storageBucket: "cloneyoutub-296.appspot.com",
  messagingSenderId: "399085711981",
  appId: "1:399085711981:web:571f19717332c0cdfb4564"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()