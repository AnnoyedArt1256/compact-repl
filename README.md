# compact-repl
This is a very bare-bones REPL enviroment for node.js that can fit in 355 bytes. This only has the most essential features of a REPL enviroment but I did add some shortcut commands. Those commands are:

**cls**/**clear**: clears the console<br />**exit**: exits out of REPL

## the code
```js
r=require("readline").createInterface({input:process.stdin,output:process.stdout});function prompt(){return new Promise(e=>{r.question("> ",o=>{"exit"==o&&process.exit(1);try{void 0!=(0,eval)(o)&&console.log((0,eval)(o))}catch(e){console.log(e.toString().split("\n")[0])}"clear"!=o&&"cls"!=o||console.clear(),e()})})}(async e=>{for(;;)await prompt()})();
```
