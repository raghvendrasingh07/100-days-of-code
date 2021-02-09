function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;
  say(phrase);
}

function say(phrase) {
  debugger;
  console.log(`** ${phrase} **`);
}
hello("Somu");
