process.stdout.write("> ")
process.stdin.on('data', p => {
  o = p.toString().slice(0,-1);
  o = o.charCodeAt(o.length-1)<13?o.slice(0,-1):o;
  if (o == "exit") { process.exit() }
  try {
      if ( (1, eval)(o) != undefined) console.log( (1, eval)(o));
  } catch (e) {
      console.log(e.toString().split("\n")[0])
  }
  if (o == "clear" || o == "cls")  console.clear();
  process.stdout.write("> ")
});
