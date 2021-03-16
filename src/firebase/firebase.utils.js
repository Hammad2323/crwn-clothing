import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCTipipwFmRolJUkL2mDwtoi6EQmcu5ia8",
    authDomain: "crwn-db-6fc1a.firebaseapp.com",
    projectId: "crwn-db-6fc1a",
    storageBucket: "crwn-db-6fc1a.appspot.com",
    messagingSenderId: "548767290286",
    appId: "1:548767290286:web:6888c1ac08928b20e6ae3f",
    measurementId: "G-T0SVNPRR72"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;
