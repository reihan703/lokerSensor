import { onValue, ref, db, auth, onAuthStateChanged, update } from "./config.js";

const lokerContainer = document.getElementById("lokerContainer");

const showLokers = () => {
  const dbref = ref(db, 'Lokers')
  onValue(dbref, (snapshot)=>{
    onAuthStateChanged(auth, (user)=>{
      lokerContainer.innerHTML = ''
      let counter = 1;
      snapshot.forEach(childSnap => {
        let html = ''
        let kondisi = ''
        let warna = ''

        if(childSnap.val().sensor == 0){
          kondisi = 'Tidak ada barang'
          warna = 'text-primary'
        }else{
          kondisi = 'Ada barang'
          warna = 'text-danger'
        }
        if(user){
          // JIKA ISI ID USER DI DATABASE == UID 
          if(childSnap.val().user === user.uid){
            html += `<div class="loker d-flex flex-column align-items-center my-sm-5 my-lg-auto" id="loker${counter}">
              <div class="shadow-lg card align-items-center rounded p-2" style="width: 25rem;">
                <h1 class="display-4 fw-bold text-nowrap">${childSnap.key}</h1>
                <i class="fa-solid fa-vault mt-3 ${warna}" style="font-size: 15rem;"></i>
                <div class="card-body text-center">
                  <p class="card-text h3 mt-3 text-nowrap">${kondisi}</p>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-outline-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop${counter}" style="min-width: 15rem; font-size: large;" id="generate${counter}">
                    Pilih
                  </button>
                  <button type="button" class="btn btn-outline-danger" style="min-width: 15rem; font-size: large;" id="done${counter}">
                    Selesai
                  </button>
      
                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop${counter}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title display-6" id="staticBackdropLabel">Your QR Code</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mx-auto" id="qrcode${counter}">
                        </div>
                        <div class="modal-footer">
                          <button type="button" style="min-width: 15rem; font-size: large;" id="select${counter}" class="btn btn-primary">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- MODAL ENDS -->
                </div>
              </div>
            </div>`;
          }else if (childSnap.val().user === "") {
            html += `<div class="loker d-flex flex-column align-items-center my-sm-5 my-lg-auto" id="loker${counter}">
              <div class="shadow-lg card align-items-center rounded p-2" style="width: 25rem;">
                <h1 class="display-4 fw-bold text-nowrap">${childSnap.key}</h1>
                <i class="fa-solid fa-vault mt-3 ${warna}" style="font-size: 15rem;"></i>
                <div class="card-body text-center">
                  <p class="card-text h3 mt-3 text-nowrap">${kondisi}</p>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${counter}" style="min-width: 15rem; font-size: large;" id="generate${counter}">
                    Pilih
                  </button>
                  <button type="button" class="btn btn-outline-danger d-none" style="min-width: 15rem; font-size: large;" id="done${counter}">
                    Selesai
                  </button>
            
                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop${counter}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title display-6" id="staticBackdropLabel">Your QR Code</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mx-auto" id="qrcode${counter}">
                        </div>
                        <div class="modal-footer">
                          <button type="button" style="min-width: 15rem; font-size: large;" id="select${counter}" class="btn btn-primary">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- MODAL ENDS -->
                </div>
              </div>
            </div>`;
					} else {
						html += `<div class="loker d-flex flex-column align-items-center my-sm-5 my-lg-auto" id="loker${counter}">
              <div class="shadow-lg card align-items-center rounded p-2" style="width: 25rem;">
                <h1 class="display-4 fw-bold text-nowrap">${childSnap.key}</h1>
                <i class="fa-solid fa-vault mt-3 ${warna}" style="font-size: 15rem;"></i>
                <div class="card-body text-center">
                  <p class="card-text h3 mt-3 text-nowrap">${kondisi}<br>dan sedang dipakai</p>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-outline-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop${counter}" style="min-width: 15rem; font-size: large;" id="generate${counter}">
                    Pilih
                  </button>
                  <button type="button" class="btn btn-outline-danger d-none" style="min-width: 15rem; font-size: large;" id="done${counter}">
                    Selesai
                  </button>
      
                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop${counter}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title display-6" id="staticBackdropLabel">Your QR Code</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mx-auto" id="qrcode${counter}">
                        </div>
                        <div class="modal-footer">
                          <button type="button" style="min-width: 15rem; font-size: large;" id="select${counter}" class="btn btn-primary">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- MODAL ENDS -->
                </div>
              </div>
            </div>`;
					}
        }else{
          html = `<div class="loker d-flex flex-column align-items-center my-sm-5 my-lg-auto" id="loker${counter}">
            <div class="shadow-lg card align-items-center rounded p-2" style="width: 25rem;">
              <h1 class="display-4 fw-bold text-nowrap">${childSnap.key}</h1>
              <i class="fa-solid fa-vault mt-3 ${warna}" style="font-size: 15rem;"></i>
              <div class="card-body text-center">
                <p class="card-text h3 mt-3 text-nowrap">${kondisi}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${counter}" style="min-width: 15rem; font-size: large;" id="generate${counter}">
                  Pilih
                </button>
    
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop${counter}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title display-6" id="staticBackdropLabel">Your QR Code</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body mx-auto" id="qrcode${counter}">
                      </div>
                      <div class="modal-footer">
                        <button type="button" style="min-width: 15rem; font-size: large;" id="select${counter}" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- MODAL ENDS -->
              </div>
            </div>
          </div>`;
        }
  
        lokerContainer.insertAdjacentHTML('beforeend',html)

        // CREATE DYNAMIC BUTTON ID
        let btnGenerate = 'generate'+counter
        let qrContainer = 'qrcode'+counter
        let btnSelect = 'select'+counter
        let btnDone = 'done'+counter
  
        const btnGen = document.getElementById(btnGenerate)
        var r;

        // NO USER = NO SELECT BUTTON
        if (!user) return btnGen.remove();

        btnGen.addEventListener('click',()=>{
          //Can change 7 to 2 for longer results.
          r = (Math.random() + 1).toString(36).substring(2);
  
          if (r) {
            let qrcodeContainer = document.getElementById(qrContainer);
            qrcodeContainer.innerHTML = "";
            new QRCode(qrcodeContainer, {
              text: r,
              width: 200,
              height: 200,
              colorDark: "#0e5cb5",
              colorLight: "#ffffff",
              correctLevel: QRCode.CorrectLevel.H,
            });
          } else {
            alert("Something went wrong");
          }
        })
        
        // UPDATE QR AND USER TO DATABASE
        const btnSel = document.getElementById(btnSelect)
        btnSel.addEventListener('click',()=>{
          update(ref(db, "Lokers/" + childSnap.key), {
            qr_code: r,
            user: user.uid
          }).then(()=>{
            location.reload()
          }).catch((error)=>{
            alert(error+" Failed to send data")
          });
        })

        // EMPTY QR AND USER
        const btnDon = document.getElementById(btnDone)
        btnDon.addEventListener('click', ()=>{
          update(ref(db, "Lokers/" + childSnap.key), {
						qr_code: "",
						user: "",
					})
						.then(() => {
							location.reload();
						})
						.catch((error) => {
							alert(error + " Failed to send data");
						});
        })
        counter++
      });
    })
    })
}

const useShowLokers = () => {
  return {showLokers}
}

export {useShowLokers}