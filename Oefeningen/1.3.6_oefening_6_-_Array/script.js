var alfaKlein = []
var alfaGroot = []
var i = 97
var x = 0
for(i;i<=122;i++){
    vervormer = String.fromCharCode(i)
    alfaKlein.push(vervormer)
}
console.log(alfaKlein);

for(x;x<=alfaKlein.length-1;x++){
    vervormer = alfaKlein[x]
    vervormer = vervormer.codePointAt(x)
    vervormer -= 32
    vervormer = String.fromCharCode(vervormer)
    alfaGroot.push(vervormer)

}console.log(alfaGroot)




