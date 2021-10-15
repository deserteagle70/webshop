function Kayit(e)
{
    e.preventDefault();
   
    console.log("kayit calisti");
    var form = $(this);
  var url = 'http://localhost:5000/HesapOlustur';
  
  $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(), 
         success: function(data)
         { 
            console.log(data);
            /*var a=parseJSON(data);
            localStorage.setItem("user", "a");*/
            /*var a=data.value();
            window.localStorage.setItem("user","a");
            console.log(localStorage.getItem("user"));*/
            if (typeof data === "object") {
               value = JSON.parse(data);
               localStorage.setItem("key",value);
             }
             localStorage.setItem("key", data);
            
            
         }
        });
}






var kayitForm=document.querySelector("#KayitFormid");
kayitForm.addEventListener("submit",Kayit);
