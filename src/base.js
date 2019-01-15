import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD_t1vp-pLH6W3ZbI_GrnnCh7ifDkvD11Q',
  authDomain: 'reactjs-913a7.firebaseapp.com',
  databaseURL: 'https://reactjs-913a7.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
