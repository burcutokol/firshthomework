let myName1=prompt("Adinizi giriniz:");
let myName = document.querySelector("#myName");
if(myName1!=null)
{
    document.getElementById('myName').innerHTML = myName1;
}
let a;
let time;
setInterval(() => {
  var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  a = new Date();
  time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() ;
  time+=" ";
  time+=days[a.getDay()];
  document.getElementById('time').innerHTML = time;
}, 1000);



