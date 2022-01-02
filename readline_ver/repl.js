const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function prompt() {
  return new Promise((resolve) => {
    rl.question('> ', c =>  {
      if (c === "exit") process.exit(1);
      try {
        if ( (1, eval)(c) != undefined) console.log( (1, eval)(c));
      } catch (err){
        console.log( err.toString().split("\n")[0] );
      }
      if (c === "clear" || c === "cls") console.clear();
      resolve();
    })
  })
}

(async _=>{while(1) await prompt()})()
