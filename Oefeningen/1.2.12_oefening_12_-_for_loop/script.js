var getal1 = parseInt(prompt("Geef eerste getal"));
var getal2 = parseInt(prompt("Geef tweede getal"));
var i = 0
if(getal1<getal2){
     i = getal1;
}else{
     i = getal2;
        }

for(i;i>=1;i--){
    if(getal1%i===0 && getal2%i===0) {
        console.log(i)
        break
    }
}
