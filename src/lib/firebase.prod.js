import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCAGjO6Wa6cTsumOBvVww5eMsx221J3FtQ",
  authDomain: "netflix-tutorial-30984.firebaseapp.com",
  projectId: "netflix-tutorial-30984",
  storageBucket: "netflix-tutorial-30984.appspot.com",
  messagingSenderId: "679901505181",
  appId: "1:679901505181:web:729e3a168a64c99d845674"
};

const firebase = Firebase.initializeApp(config);

export { firebase };