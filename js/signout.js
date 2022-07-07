import { auth, signOut } from "./config.js";

const signout = () => {
	// SIGNOUT BTN
	const outBtn = document.getElementById("signout");

	outBtn.addEventListener("click", () => {
		signOut(auth)
			.then(() => {
				alert("Signed out")
        location.reload()
			})
			.catch((error) => {
				// An error happened.
				alert("Failed to sign out");
			});
	});
};

const useSignout = () => {
	return { signout };
};

export { useSignout };
