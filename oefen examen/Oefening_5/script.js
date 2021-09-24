var array1 = [];
var array2 = [];
var i = 1;
var teller = 1;
var som = 1;
var som2 = 1;

for(i;i<=10;i++){
    array1.push(som);
    array2.push(som2);
    if(teller === 3){
        som = som * som;
        som2 = som * 2;
        teller = 1;
    }else{
        som = som + som;
        som2 = som * 2;
        teller++;
    }
}
console.log("Reeks 1 = " + array1);
console.log("Reeks 2 = " + array2);