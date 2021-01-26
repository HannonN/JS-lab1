"use Strict";

const fullName = "Nathan Hannon";
const age = 31;
const birthday = "December 28";
const liveInDetroit = true;
const lifeEvents = [
  "I was born in Kokomo, Indiana",
  "I went to Ferris State University",
  "I opened a Pizzeria in the fall of 2017",
  "I released my first ep January 1st of 2020",
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

const counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
}
if ((randomNumber !== 5, randomnumber++)) console.log(counter);
console.log(`it took ${counter} iterations to randomly generate the number 5`);
break;
