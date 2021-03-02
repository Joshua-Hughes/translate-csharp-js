console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// Function to "roll" a die
//  Generates a random number between 1 and 6
//  Constructs a new Die object with the random number as it's value
const roll = () => {
    let dieValue = Math.floor(Math.random() * 6);
    let die = dieValue;
    return die;
}

for (let i = 0; i < 10; i++) {
    let die1 = roll();
    let die2 = roll();

    let message = `${die1} + ${die2} == ${die1 + die2}`;

    if (die1 === die2) {
        message += " DOUBLES!";
    }
    console.log(message)
}

