const express = require("express");
const { v4: uuidv4 } = require('uuid');
const mysql=require("mysql");
const cors=require("cors");
const bodyparser=require("body-parser");
const { json } = require("body-parser");

const app=express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.options("*",cors());

app.post("/HesapOlustur",function(req,res)
{
    var baglanti=mysql.createConnection({
        host:"localhost",
        user:"user1",
        password:"test1",
        database:"giriskayitlar"
    });
    baglanti.connect();
    var veri=JSON.stringify(req.body,null,2);
    baglanti.query(`INSERT INTO \`kullanicilarbilgiler\`(\`sifre\`,\`isim\`,\`soyisim\`,\`mail\`)VALUES ('${JSON.parse(veri)["Kayitsifre"]}','${JSON.parse(veri)["Kayitname"]}','${JSON.parse(veri)["Kayitsoyisim"]}','${JSON.parse(veri)["Kayitmail"]}')`,function(error,results,fields)
    {
        if(error) throw error;
        console.log("results:",results);
        
        baglanti.query(`SELECT * FROM \`kullanicilarbilgiler\` WHERE \`id\`=${results['insertId']}`,function(error,results,fields)
        {
            if(error) throw error;
            console.log("results:",results);
            res.send(JSON.stringify(results))
        })
    });
   

});
app.get("/HesapListe",function(req,res)
{
    var baglanti=mysql.createConnection({
        host:"localhost",
        user:"user1",
        password:"test1",
        database:"giriskayitlar"
    });
    baglanti.connect();
    baglanti.query(`select * from kullanicilarbilgiler `, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.post('/Giris', function (req, res) {
    var baglanti=mysql.createConnection({
        host:"localhost",
        user:"user1",
        password:"test1",
        database:"giriskayitlar"
    });
    baglanti.connect();
    
    var veri = JSON.stringify(req.body, null, 2);
    baglanti.query(`select * from kullanicilarbilgiler where mail='${JSON.parse(veri)['Girismail']}' AND sifre='${JSON.parse(veri)['GiriSifre']}'`, function (error, results, fields) {
        // if (error) throw error;

        if (results == '') {
            res.send(JSON.stringify(false));  
        } else {
            res.send(JSON.stringify(results));  
        }

    });
    
})
app.listen(5000);