let bonus = 20;

function sum (first, second){
    let result = first+ second + bonus;
    if(result > 9){
        var mood = 'happy';
        mood = 'finky';
        mood = 'tinky';
        console.log(mood);
    }
    console.log(bonus);
    return result;
}

const output = sum(3 , 7);
console.log(bonus);
console.log(output);