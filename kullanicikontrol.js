function Kontrol()
{
    if(sessionStorage.getItem("auth")=="true")
    {
        var data = JSON.parse(localStorage.getItem('userData'))

      document.getElementById('userName').innerHTML  = `<i id="resimkullanici" class="far fa-user"></i> ${JSON.parse(data)[0]['isim']}`

      console.log(   JSON.parse(data)[0]['isim']);
    }
    else
    {
        localStorage.setItem('userData', {})
        console.log('data yok');

    }
}
window.onload = Kontrol();