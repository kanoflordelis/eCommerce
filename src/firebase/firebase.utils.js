import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCP6NuUEpo5SmvZ1fIyKYb9S1UBsAE4W04',
	authDomain: 'crwn-ecommerce.firebaseapp.com',
	databaseURL: 'https://crwn-ecommerce.firebaseio.com',
	projectId: 'crwn-ecommerce',
	storageBucket: '',
	messagingSenderId: '564549146517',
	appId: '1:564549146517:web:8f01141b08c66372'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
