
// Oplossing 1:

var array1 = [];
var array2 = [];
var i = 1;
var som = 1;
var som2 = 1;
var eindgetal = parseInt(prompt("Geef eindgetal in"));

for(i;som<=eindgetal;i++){
    array1.push(som);
    array2.push(som2);
    if(i%3 === 0){
        som = som * som;
    }else{
        som = som + som;
    }som2 = som * 2;
}
console.log("Reeks 1 = " + array1);
console.log("Reeks 2 = " + array2);




/*

// Oplossing 2: ( beetje anders array2 begint op 2 inplaatse van 1)

var array1 = [];
var array2 = [];
var i = 1;
var som = 1;
var eindGetal = prompt("Geef eindegetal in");

for(i;som<=eindGetal;i++){
    array1.push(som);
    array2.push(som * 2);
    if(i%3 === 0){
        som = som * som;
    }else{
        som = som + som;
    }

} console.log(array1);
console.log(array2);
*/
