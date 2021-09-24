var array1 = [];
var array2 = [];
var i = 1;
var som = 1;
var som2 = 1;
var teller = 0;
for(i;i<=10;i++){
    teller++;
    array1.push(som);
    array2.push(som2);
    if(teller === 3){
        som = som * som;
        som2 = som * 2;
        teller = 0;

    }else{
        som = som + som;
        som2 = som * 2;
    }
}
console.log(array1)
console.log(array2)
