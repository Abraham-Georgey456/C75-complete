import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBjSU9_1vqmMDvP4lnLOVIjZGug_i526d8",
	authDomain: "e-library-66863.firebaseapp.com",
	projectId: "e-library-66863",
	storageBucket: "e-library-66863.appspot.com",
	messagingSenderId: "231022979304",
	appId: "1:231022979304:web:ae0a74c24790110519415d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
