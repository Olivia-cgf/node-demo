// function say(word){
//     console.log(word);
// }

// function execute(someFuntion, value){
//     someFuntion(value);
// }

// execute(say, "Hello");

function execute(someFuntion, value){
    someFuntion(value);
}

execute(function(word){console.log(word)},"Hello");//匿名函数