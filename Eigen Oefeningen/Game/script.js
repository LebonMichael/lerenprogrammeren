var name = prompt("Choose ur name")
var race = prompt("Choose ur race (Human or Elf)")
var classe = prompt("Choose ur classe (Warrior,Mage or Hunter)")
var level = 1
var attack = 1
var health = 10
var array_character = [name,race,classe,level,attack,health]
console.log(array_character)
var areaTeller = 1
var array_enemy =  []
array_enemy.push("Rat")
array_enemy.push("Snake")
array_enemy.push("Boar")
var potion = 10
array_drop = [potion,]
loop1:
for(areaTeller;areaTeller<=10;areaTeller++){
    var area = parseInt(prompt("What area u wanna lvl in? 1 - Forest(1-5), 2 - Desert(6-13)"))
    if(area === 1){
        function randomMonsterForrest(max) {
            return Math.floor(Math.random() * max)
            };
        function randomLvlForrest(max) {
            return Math.floor(Math.random() * max)+1
        }
        var go = prompt("Ur in forrest, u wanna keep going? Y = Yes or N = No")

        loop2:
        while(go === "Y"){
            var enemy_id = randomMonsterForrest(2)
            var enemy_Lvl_id = randomLvlForrest(5)
            var enemy = []
            var enemy_attack = 0.20
            enemy[0] = array_enemy[enemy_id]
            enemy[1] = enemy_Lvl_id
            enemy[2] = (enemy_attack * enemy_Lvl_id)
            enemy[3] = (enemy_Lvl_id * 5)
            var battleChar = 1
            var battleEnemy = 1
            console.log(enemy)
            console.log(array_character)

            loop3:
            for(var x = 0;x<=100;x++){
                console.log(array_character[5])
                console.log(enemy[3])
                battleChar = enemy[3]
                battleChar = battleChar - array_character[4]
                battleEnemy = array_character[5]
                battleEnemy = battleEnemy - enemy[2]
                array_character[5] = battleEnemy
                enemy[3] = battleChar
                console.log(array_character[5])
                console.log(enemy[3])
                if(array_character[5] <= 0 ){
                    console.log("Woooottt!!!! You died. Hope ur have beter luck next time ^^");
                    break loop1;

                }else if(enemy[3] <= 0){
                    console.log("Nice job, you pwned him ^^")
                    break loop3;
                }
            }
            console.log(enemy)
            console.log(array_character)
            go = prompt("U still wanna keep going? Y = Yes or N = No")
        }


    }else if(area === 2) {
        console.log("damn")
    }else{

    }
}



console.log(array_character)