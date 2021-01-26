"use Strict";

const fullName = "Nathan Hannon";
const age = 31;
const birthday = "December 28";
const liveInDetroit = true;
const lifeEvents = [
  "I was born in Kokomo, Indiana",
  "I went to Ferris State University",
  "I opened a Pizzeria in the fall of 2017",
  "I released my first EP January 1st of 2020",
];

//if/else loop

if (liveInDetroit) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan.  I am curently ${age} years old and my birthday is ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Grand Rapids Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

//life events loop

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

// While loop

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

let hours = 50;
let wage = 10;

if (hours <= 40) {
  let paycheck = hours * wage;
  console.log(`You will receive $${paycheck} this week.`);
} else {
  let overtime = (hours - 40) * (wage * 1.5);
  let paycheck = 40 * wage + overtime;
  console.log(paycheck);
}
