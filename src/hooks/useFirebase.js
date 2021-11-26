import { useEffect, useState } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import initialization from '../Pages/Firebase/firebase.init';

initialization();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [authError, setAuthError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	// register user
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setAuthError('');
				const newUser = { email, displayName: name };
				setUser(newUser);

				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	// email login user
	const loginWithEmail = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// google sign in
	const googleSignIn = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUser(result.user);
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	// user logout
	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	// observ user state
	useEffect(() => {
		const unsubscrived = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscrived;
	}, []);
	return {
		googleSignIn,
		user,
		isLoading,
		loginWithEmail,
		authError,
		registerUser,
		logout,
	};
};

export default useFirebase;
