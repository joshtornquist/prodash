const greetings = 
[
    "Who goes there?",
    "I'm sorry, do I know you?",
    "Hi, have we met before?",
    "Hello, mysterious stranger!",
    "I'm going to need to see ID",
    "Hi, who are you?",
    "Hello, alien impostor",
    "This is awkward...",
    "Lost you are...login you must"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


const greeting = greetings[getRandomInt(greetings.length)]
export default greeting;