let text = prompt("Geef tekst");
let karakter = prompt("Geeft karakter");
let i = 1;
let aantal = 0;
let o = 0;

for(i;i<=text.length;i++){

    if(karakter===text.substring(o,i)){
        aantal++;
        o++;
    }else{
        o++;
    }
}
console.log(aantal);

