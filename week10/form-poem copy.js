function myGreeting(name){
    let greeting = `Howdy, ${name}!`;
    greeting = greeting.toUpperCase();
    console.log(greeting);
}

myGreeting("Sammy");
myGreeting("Joe Biden");
myGreeting("Sam John");
myGreeting("Samuel");


function remainder(x1,x2){
    let rem1 =  x1 % x2;
    console.log(rem1);
}

remainder(10, 3); // 1
remainder(20, 6); // 2
remainder(16, 4); // 0