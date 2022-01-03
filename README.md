# compact-repl
This is a very bare-bones REPL enviroment for node.js that can fit in 276 bytes. This only has the most essential features of a REPL enviroment but I did add some shortcut commands.

## commands/shortcuts
**cls**/**clear**: clears the console<br/>**exit**: exits out of REPL

## the code
```js
process.stdout.write("> "),process.stdin.on("data",s=>{o=s.toString().slice(0,-1),"exit"==o&&process.exit();try{void 0!=(0,eval)(o)&&console.log((0,eval)(o))}catch(o){console.log(o.toString().split("\n")[0])}"clear"!=o&&"cls"!=o||console.clear(),process.stdout.write("> ")});
```

version that is compatible with windows
```js
process.stdout.write("> "),process.stdin.on("data",e=>{o=e.toString().slice(0,-1),o=o.charCodeAt(o.length-1)<13?o.slice(0,-1):o,"exit"==o&&process.exit();try{void 0!=(0,eval)(o)&&console.log((0,eval)(o))}catch(o){console.log(o.toString().split("\n")[0])}"clear"!=o&&"cls"!=o||console.clear(),process.stdout.write("> ")});
```


### tools i used for this
I used https://minify.js.org/js and then hand-minified the code to get to this size.
