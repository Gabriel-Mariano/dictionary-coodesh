import * as firebase from '@react-native-firebase/app';
// import 'firebase/auth';
// import "firebase/firestore"
import firestore from '@react-native-firebase/firestore';
// import '@firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyDzl8s16Sv8t7FxIFOT12AUjYAtsSzrgYk',
  authDomain: 'dictionarycoodesh.firebaseapp.com',
  databaseURL: 'https://dictionarycoodesh.firebaseio.com',
  projectId: 'dictionarycoodesh',
  storageBucket: 'dictionarycoodesh.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
  appId: '1:825044964852:android:e4ee0d413541532ff8d5a1',
};

if (!firebase.default.apps.length) {
   firebase.default.initializeApp(firebaseConfig);
}

let db = firestore;

export { firebase, db };
