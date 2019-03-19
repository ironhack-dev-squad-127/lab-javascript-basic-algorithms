// Names and Input
let hacker1 = 'Joaquim';
let hacker2 = 'Mostafa';
// If possible, you can also do:
// let hacker2 = prompt();

console.log("hacker1's name is " + hacker1);
console.log("hacker2's name is " + hacker2);

//Conditionals

// If hacker1 is longer than hacker2
if (hacker1.length > hacker2.length) {
  console.log('Hacker1 has the longest name, it has '+hacker1.length+' characters')
}
else if (hacker1.length < hacker2.length) {
  console.log('Hacker2 has the longest name, it has '+hacker2.length+' characters')
}
else {
  console.log(`You both got equally long names, ${hacker1.length} characters!!`)
}

// Loops

let iteration6 = "";
for (let i = 0; i < hacker1.length; i++) {
  iteration6 += hacker1[i].toUpperCase();
  // If we are not at the last character
  if (i !== hacker1.length-1) {
    iteration6 += " "
  }
}
// iteration6 = iteration6.trim(); // other solution to remove the last " "
// iteration6 = iteration6.substr(0,iteration6.length-1);// other solution to remove the last " "
console.log('iteration6', "!"+iteration6+"!")

let iteration7 = "";
for (let i = hacker1.length-1; i >= 0; i--) {
  iteration7 += hacker1[i];
}
console.log('iteration7', iteration7);

// console.log("A < B", "A" < "B");
// console.log("A < Z", "A" < "Z");

if (hacker1 < hacker2) {
  console.log('hacker1 goes first');
}
else if (hacker1 > hacker2) {
  console.log('hacker2 goes first');
}
else {
  console.log('You have same names');
}

// Iteration 9
let iteration9 = "Amor, Roma";
let sanitizedStr = ""
for (let i = 0; i < iteration9.length; i++) {
  const char = iteration9[i].toLowerCase();
  if ("a" <= char && char <= "z") {
    sanitizedStr += char;
  }
}
let reverse = "";
for (let i = sanitizedStr.length-1; i >= 0; i--) {
  reverse += sanitizedStr[i];
}
// console.log(sanitizedStr)
// console.log(reverse)

if (sanitizedStr === reverse) {
  console.log("It's a palindrome!")
}
else {
  console.log("It's not a palindrome...")
}

// Iteration 10
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut blandit nibh. Cras venenatis vestibulum metus sit amet dictum. Suspendisse malesuada bibendum augue, eget efficitur diam ultricies feugiat. Nulla mollis ex tellus, semper elementum dui efficitur sit amet. Quisque convallis sapien in metus elementum, eget auctor sem ornare. Donec pharetra odio sit amet tellus tempor feugiat. Sed a enim ex. Curabitur nec turpis a augue facilisis blandit. Vestibulum molestie lectus in odio commodo luctus. Duis sem est, sodales a vehicula id, hendrerit eget velit. Nulla maximus justo id augue sagittis accumsan. Integer turpis eros, ultricies convallis posuere et, auctor non ante. Vestibulum posuere, elit sit amet dapibus ultrices, orci mi lacinia neque, nec venenatis nunc ex id ex. Aliquam et dapibus quam, at convallis turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nec augue eu nisl accumsan dapibus nec ac velit. Vestibulum porta libero eu ante tempor, non malesuada augue dapibus. Etiam fermentum accumsan ipsum, ac pulvinar erat accumsan vitae. Aenean vitae faucibus augue. Donec in eros sollicitudin, euismod elit sit amet, tempor nulla. Aliquam lobortis mattis rutrum. Aenean molestie lacinia eros, ut facilisis nulla aliquet ac. Cras augue magna, eleifend ac lacus sit amet, mattis dignissim massa. Aliquam pharetra varius tellus, ullamcorper venenatis mauris dictum elementum. Vestibulum ut est nisl. Aenean porttitor eleifend felis, blandit volutpat eros volutpat ac. Morbi eleifend convallis condimentum. In sed accumsan dolor, et aliquam dolor.`

let nbOfWords = 1;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    nbOfWords++;
  }
}
console.log("lorem has " + nbOfWords + " words");

function sanitzeWord(word) {
  let result = ""
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if ('a' <= char && char <= 'z') {
      result += char
    }
  }
  return result
}

let cleanWords = lorem.split(' ')
for (let i = 0; i < cleanWords.length; i++) {
  cleanWords[i] = sanitzeWord(cleanWords[i])
}
// cleanWords is an array with all the words in lowercase, without ' ' or '.'

let nbOfEt = 0;
for (let i = 0; i < cleanWords.length; i++) {
 if (cleanWords[i] === 'et') {
  nbOfEt++
 }
}
console.log("The number of 'et' is " + nbOfEt);
