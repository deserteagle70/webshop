// function Getiriliyor(e) {
//    console.log("aaaaaclıtı")
//    e.preventDefault();


//    $.ajax({
//       type: "GET",
//       url: 'http://localhost:5000/HesapListe',
//       async: false,
//       success: function (text) {
//          console.log(text);
//       }
//    });

// };

// var getir = document.querySelector("#getir");
// getir.addEventListener("submit", Getiriliyor);

function loaded() {
   if (localStorage.getItem('userData') != '') {
      var data = JSON.parse(localStorage.getItem('userData'))

      document.getElementById('userName').innerHTML  = `<i id="resimkullanici" class="far fa-user"></i> ${JSON.parse(data)[0]['isim']}`

      var cikisform=document.createElement("form");
      var cikis=document.createElement("button");

      cikisform.className="cik";
      cikis.innerText="Çıkış"
      document.getElementById('Secenekler').appendChild(cikisform);
      cikisform.appendChild(cikis);
      

      console.log(   JSON.parse(data)[0]['isim']);
   } else {
      localStorage.setItem('userData', {})
      console.log('data yok');
   }
}





window.onload = loaded();
function git(e){
   e.preventDefault();
sessionStorage.setItem("auth",false)
   window.location.href="Anasayfa.html";
}
var a=document.querySelector(".cik")
a.addEventListener("submit",git);

