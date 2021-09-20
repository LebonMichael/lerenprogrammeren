var array1 = [];
var array2 = [];
var array3 = [];
function randomGetal(max) {
    return Math.floor(Math.random() * max);
}


for(var i = 1;i<=10; i++){
    array1.push(randomGetal(100))
    array2.push(randomGetal(100))
    var resultaat = array1[i-1] + array2[i-1]
    array3.push(resultaat)
    console.log(array1[i-1] + "+" + array2[i-1] + "=" + array3[i-1])

}
console.log(array1)
console.log(array2)
console.log(array3)

