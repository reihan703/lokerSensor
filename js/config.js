// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import {
	getDatabase,
	ref,
	set,
	child,
	update,
	remove,
	get,
	onValue,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAFWyPf38WqCSqGdLsUx6h-wC5N6LDJBjg",
	authDomain: "e-loker-2c934.firebaseapp.com",
	projectId: "e-loker-2c934",
	storageBucket: "e-loker-2c934.appspot.com",
	messagingSenderId: "676553842907",
	appId: "1:676553842907:web:af3ff3cae186d33d506cfe",
	measurementId: "G-2W9L76FBPX",
	databaseURL: "https://e-loker-2c934-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
	ref,
	set,
	child,
	update,
	remove,
	get,
	onValue,
	db,
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
};
