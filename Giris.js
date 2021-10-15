function Giris(e)
{
    console.log("aaaaacıldı");
    e.preventDefault();
    var form = $(this);
  var url = 'http://localhost:5000/Giris';
  
  $.ajax({
     
         type: "POST",
         url: url,
         data: form.serialize(),
         success: function(data)
         { 
            console.log(data == 1);
         
         if(JSON.parse(data) != false){
            console.log(data);
            localStorage.setItem('userData',JSON.stringify(data)) 
            document.getElementById('userName').innerHTML  = `<i id="resimkullanici" class="far fa-user"></i> ${JSON.parse(data)[0]['isim']}`
            
            window.location.href="BasariliGiris.html"; 
            sessionStorage.setItem("auth",true); 
         }else{
            sessionStorage.setItem("auth",false); 
            alert('hatalı giriş')
         }     
         
         }
        });
       
}


var GirisForm=document.querySelector("#GirisFormid");
GirisForm.addEventListener("submit",Giris);