import * as firebase from 'firebase/app';
import 'firebase/analytics'


const firebaseConfig = {
    apiKey: "AIzaSyChaS75oErlFhUacmtunlVlaIMWIsRfcMA",
    authDomain: "gppcr-c437c.firebaseapp.com",
    databaseURL: "https://gppcr-c437c.firebaseio.com",
    projectId: "gppcr-c437c",
    storageBucket: "gppcr-c437c.appspot.com",
    messagingSenderId: "918726801790",
    appId: "1:918726801790:web:d0f1bf164ab6631f8f5b2f",
    measurementId: "G-REZFPWX6LL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase