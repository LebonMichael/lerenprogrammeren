var array1 = [];
var array2 = [];
var array3 = [];
var i = 1;
var x = 0;
var somOneven = 0;
function randomGetal(max) {
    return Math.floor(Math.random() * max);
}

for(i;i<=10;i++){
    array1.push(randomGetal(100));
    array2.push(randomGetal(100));
}
console.log(array1);
console.log(array2);
i = 1;
for(i;i<=array1.length;i++){

    if(array1[x]%2 === 0){
        array3.push(array1[x]);
    }else{
        somOneven = somOneven + array1[x];
    }
    if(array2[x]%2 === 0){
        array3.push(array2[x]);
    }else{
        somOneven = somOneven + array2[x];
    }x++;
}
console.log(array3);
console.log("De som van de onven getallen van array1 en array2 is",somOneven);
