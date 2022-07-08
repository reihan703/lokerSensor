import {
	onValue,
	ref,
	db,
	auth,
	onAuthStateChanged,
} from "./config.js";

const qrList = document.getElementById('qr')

const getQr = () => {
  const dbref = ref(db, "Lokers");
  onValue(dbref, (snapshot) => {
		onAuthStateChanged(auth, (user) => {
      let counter = 1
			qrList.innerHTML = "";
			snapshot.forEach((childSnap) => {
        let html = "";

				if (childSnap.val().user === user.uid) {
          html += `<div class="loker h3 mt-1">
            ${childSnap.key}
          </div>
          <div id="userQr${counter}">
          </div>`;

          qrList.insertAdjacentHTML('beforeend', html)

          function generateQRCode() {
						//Can change 7 to 2 for longer results.
						let r = childSnap.val().qr_code
						console.log(r);
            let userQrContainer = 'userQr'+counter

						if (r) {
							let qrcodeContainer = document.getElementById(userQrContainer);
							qrcodeContainer.innerHTML = "";
							new QRCode(qrcodeContainer, {
								text: r,
								width: 128,
								height: 128,
								colorDark: "#5868bf",
								colorLight: "#ffffff",
								correctLevel: QRCode.CorrectLevel.H,
							});
						} else {
							alert("Please enter a valid URL");
						}
					}
          generateQRCode()
				}
        counter++
			});
		});
	});
}

const useGetQr = () => {
  return {getQr}
}

export {useGetQr}