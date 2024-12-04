let unfocus = localStorage.getItem("unfocus")
  ? parseInt(localStorage.getItem("unfocus"))
  : 0; // untuk menyimpan data unfokus ke local storage yang berfungsi untuk membuat nilai tetap utuh walaupun website di refresh

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    unfocus++;
    localStorage.setItem("unfocus", unfocus);
    console.log(unfocus);
  }
}); // berfungsi untuk menambahkan nilai pada vatiable unfocus dan juga menjadi system utama fitur unfokus
window.addEventListener("beforeunload", function (event) {
  if (unfocus > 0) {
    unfocus--;
  }
  console.log(unfocus);
  localStorage.setItem("unfocus", unfocus);
}); // berfungsi jika user merefresh website tidak akan membuat nilai unfokus bertambah karna sifat bawaan addEventListener("visibilitychange") adalah mendeteksi semua hal yang membuat user tidak fokus termasuk refresh website

// fungsi unfocus jika tidak full screen
if (document.exitFullscreen) {
  document.exitFullscreen();
  unfocus++;
  localStorage.setItem("unfocus", unfocus);
  console.log(unfocus);
} else if (document.mozCancelFullScreen) {
  unfocus++;
  localStorage.setItem("unfocus", unfocus);
  console.log(unfocus);
  document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) {
  unfocus++;
  localStorage.setItem("unfocus", unfocus);
  console.log(unfocus);
  document.webkitExitFullscreen();
} else if (document.msExitFullscreen) {
  unfocus++;
  localStorage.setItem("unfocus", unfocus);
  console.log(unfocus);
  document.msExitFullscreen();
}

let h2 = document.createElement("h2");
h2.innerHTML = "unfocus: " + unfocus;
let body = document.body;
body.append(h2); // untuk menampilkan data ke halaman,tapi nilai unfokus dapat dilihat selain sengaja menampilkannya ke halaman yaitu dengan cara menulis unfokus di console yang mana nama unfokus adalah nama vatiable yang menyimpan nilai dari unfokus

// Fungsi untuk masuk mode full screen
function enterFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

// Fungsi untuk keluar dari mode full screen
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  alert("Anda telah keluar dari mode full screen");
}

// document
//   .getElementById("enterFullScreenBtn")
//   .addEventListener("click", enterFullScreen);
// document
//   .getElementById("exitFullScreenBtn")
//   .addEventListener("click", exitFullScreen);

const height = window.innerHeight;

function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (height < 700) {
    document.getElementById("sizeOutput").textContent = `layar mengambang`;
  } else {
    document.getElementById(
      "sizeOutput"
    ).textContent = `tidak layar mengambang`;
  }
}
// if (height < 700) {
//   unfocus++;
//   localStorage.setItem("unfocus", unfocus);
//   console.log(unfocus);
// }

// Deteksi perubahan ukuran jendela
window.addEventListener("resize", function () {
  updateWindowSize();
});

// Perbarui ukuran jendela saat halaman pertama kali dimuat
updateWindowSize();
