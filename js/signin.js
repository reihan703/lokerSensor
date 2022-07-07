import { auth, signInWithEmailAndPassword } from "./config.js";

const signin = () => {
	const loginBtn = document.getElementById("btnLogin");

	loginBtn.addEventListener("click", function (e) {
		e.preventDefault();
		const email = document.getElementById("emailLog").value;
		const password = document.getElementById("passwordLog").value;
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("Logged in");
				location.reload()
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log(errorCode + errorMessage);
				alert("No user found");
			});
	});
};

const useSignin = () => {
	return { signin };
};

export { useSignin };
