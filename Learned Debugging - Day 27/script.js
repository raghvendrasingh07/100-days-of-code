function hello(name) {
  let phrase = `Hello, ${name}!`;

  say(phrase);
}

function say(phrase) {
  console.log(`** ${phrase} **`);
}
hello("Somu");
