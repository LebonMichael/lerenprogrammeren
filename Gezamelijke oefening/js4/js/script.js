//FOR
/*
for (teller;conditie;wijzeiging( teller)){
    code
}*/



/*
var i = 1;
for(i;i<=10;i++){ /!* 1=1+1 of 1++ *!/
    console.log(i);
}
i = 1;
var x = 0;
for(i;i<=10;x){
    console.log(x);
    x = x + 2;
    i++;
}
for(i;i<=10;i+=2){ //i = i + 2
    console.log(i)
}
*/

/*
var i = 10;
for(i;i>=0;i--) { /!* 1=1-1 of 1-- *!/
    console.log(i);
}
*/

// While loop


var text = "";
var i = 0;
while(i<101){
    text = text + "<br>De nummers zijn " +i; // of text += "De nummers zijn" i+;
    i++;
}
document.getElementById("demo").innerHTML = text;

