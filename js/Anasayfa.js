function gecemodu() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function kaynakca(){
alert ('Veriler Maçkolik ve wikipedia sitesinden alınmıştır')
}
function saat(){
    var tarih=new Date();
    var yıl=tarih.getFullYear();
    var ay=tarih.getMonth();
    var gun=tarih.getDay();
    var saat =tarih.getHours();
    var dakika =tarih.getMinutes();
    var saniye =tarih.getSeconds();
    var zaman=gun+"/"+ay+"/"+yıl+"     "+saat+":"+dakika+":"+saniye
    document.getElementById("saat").innerHTML=zaman;
}



function yenileme(){
setInterval(()=>window.location.reload(false),5000);

}
function gün(){
    var g = new Date();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    document.getElementById("gun1").innerHTML = gunler[g.getDay()];

}
function puanhesaplama(){
    
 var galibiyet=Number(document.getElementById("1.sayi").value);
 var beraberlik=Number(document.getElementById("2.sayi").value);
 var puan=(galibiyet*3)+beraberlik;
 document.getElementById("sonuc").innerHTML="Takım Puanı:"+ puan;

}
function eniyi(){
    
        
        var oyuncu=txtoyuncu.value;
        document.getElementById("ekle").innerHTML="Tüm zamanların en iyisi (Goat)  "+  oyuncu;  
}
function liste(){
    var oyuncu =["1-Messi" , "2-Ronaldo" , "3-Kylian Mbappe","4-Kevin De Bruyne", "5-Neymar Jr.","6-Robert Lewandowski","7-Mohammed Salah","8-N'Golo Kante","9-Virgil van Dijk","10-Sadio Mane"]
var i = 0;
var yazı = "";
while (oyuncu[i]) {
    yazı += oyuncu[i] + "<br>";
    i++;
}
document.getElementById("listee").innerHTML=yazı;
}
function bilmece(){
    var sayi,tahmin,hak=1,i=0;;
    sayi=Math.round(10);
    do
    {
        tahmin=parseInt(prompt("Messini Barcelonada giydiği forma numarası kaç (3 hakkınız var): "));
        
        if (tahmin==10)
        {
        alert("Tebrikler bildiniz. Messinin Barcelonada giydiği numara: "+ sayi +"   "+hak + ". hakkınızda bildiniz.");
        
        }
    hak++;
    }

    while ((tahmin!=sayi) && hak<4)
    if (hak>3)

    {
        alert("Hakkınız kalmadı. Messinin Numarası: "+ sayi);
    }
}
function resimd(){
    document.getElementById("messi").innerHTML="<img src=images/messiforma.jpg>";
    
}
function resimd2(){
    document.getElementById("ronaldo").innerHTML="<img src=images/ronaldoforma.jpg>";
    
}
function yenisayfa(){
window.location="https://tr.wikipedia.org/wiki/Futbol_tarihi"
}
$('a.yukarı').click(function(){
	$(document.body).animate({scrollTop : 0},800);
	return false;
});
$(document).ready(function(){
       
    $("#gizle").click(function(){
       $("#paragraf1").hide(); 
    });
    
    $("#göster").click(function(){
       $("#paragraf1").show(); 
    });
    
});
$(document).ready(function(){
    var isimler=[];
    $("#btn1").click(function(){
        isimler.push($("#txtad").val());
    });
         
    

    $("#btn2").click(function(){
       for(var i=0;i<isimler.length;i++)
           {
               $("#sonuc1").append(isimler[i]+"<br>");
           }
    });
    
});