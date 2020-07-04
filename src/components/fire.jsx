import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDfhDK-7RFyf6_Np7Fls57aK_d7dDWv2G0",
  authDomain: "novi-orbis-form.firebaseapp.com",
  databaseURL: "https://novi-orbis-form.firebaseio.com",
  projectId: "novi-orbis-form",
  storageBucket: "novi-orbis-form.appspot.com",
  messagingSenderId: "1045522282984",
  appId: "1:1045522282984:web:eaf931433d2f529c1d0c5d",
  measurementId: "G-43HY80DP15"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;