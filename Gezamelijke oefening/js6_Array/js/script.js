//DECLARATIE BARIABELEN

var cursisten = ["Tom","Tim","Bart","Els"];
var cursusJaar = [2017,2018,2019];

//var cursusJaar = new Array(2017,2018,2019); // andere mogelijkeheid


console.log(cursisten);
console.log(cursisten[2]); // toont Bart
console.log(cursisten.length); // Geef de juist aantal aan zonder vanaf 0 te tellen

console.log(cursusJaar);
console.log(cursusJaar[2]); // toont 2019
console.log(cursusJaar.length); // Toont 3

//cursist Toevoegen

cursisten.push("Marieke");
console.log(cursisten);

//
cursisten.unshift("Thomas"); // Zet domme thomas van voor
console.log(cursisten);

//laatste item verwijderen
cursisten.pop();
console.log(cursisten)

// eerst item verwijderen
cursisten.shift();
console.log(cursisten);

//Toont aan welke positie bart heeft
console.log(cursisten.indexOf("Bart"));

//
cursisten.splice(2,1) // 2 = positie van naam en 1 = hoeveel deletenen
console.log(cursisten)

//Loops en arrays

for(var i = 0;i<=cursisten.length;i++){
    console.log(cursisten[i])
    document.getElementById("curisten").innerHTML=cursisten;
}document.getElementById("curisten").innerHTML=cursisten[i];


var i = 0;
while(i<=cursisten.length){
    console.log(cursisten[i]);
    i++
}

//foreach
/*
cursisten.forEach(element =>console.log(element))

for(i=0;i<=cursisten.length;i++) {
    document.querySelector("#curistentest").innerHTML += "<li>" + cursisten[i] + "<li/>"
}
*/

//LOOP:CONTINUE AND BREAK
var data = ["Tim","Tom",1980,1973,"designer","developer"];

for(i=0;i<=data.length;i++){
    if(typeof data[i] !== "string")continue;
        console.log(data[i]);
    }
