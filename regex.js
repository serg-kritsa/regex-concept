// //=== // case-sensitive regexp
// console.log(/Hello/.test("Hello world!"));
// // === // OR regexp
// console.log(/world|universe/.test("Hello world!"));
// // === // ignore case regexp
// console.log(/freecodecamp/i.test("freeCodeCamp"));
// // === match // array
// console.log("Extract  the word 'coding' from this string".match(/coding/));
// // === match // elements in array
// console.log("Repeat, Repeat, Repeat".match(/Repeat/g));
// // === global search // // global search w/ ignore case 
// console.log("Twinkle, twinkle little star".match(/twinkle/ig));
// //
// // === anything
// console.log("be hum aa song".match(/hu./));
// console.log("Bear hug".match(/hu./));
// // === one of // /b[aiu]g/; // bag big bug
// console.log("Beware of bugs in the above code".match(/[aeiou]/ig)); // all vowels  
// // === range of letters
// console.log("The quick brown fox jumps over the lazy dog.".match(/[a-z]/ig)); // every letter  
// // === range numbers
// console.log("3.14".match(/[1-4]/ig)); // specified numbers  
// // === except
// console.log("The quick brown fox jumps over the lazy dog.".match(/[^aeiou]/ig)); // except vowels
// // === + means 1 or more === 
// console.log("There is the  famous Mississipi river. Triple sss".match(/s+/)); // ["s"]
// console.log("There is the  famous Mississipi river. Triple sss".match(/s+/g)); // [ 's', 's', 'ss', 'ss', 'sss' ]
// // === * means 0 or more === 
// console.log("Good".match(/go*/ig)); // [ 'Goo' ]
// console.log("Gmail".match(/go*/ig)); // [ 'G' ]
// console.log("Email".match(/go*/ig)); // null
// // === ? means 0 or 1 === 
// console.log(/favou?rite/.test("favorite")); // true // USA
// console.log(/favou?rite/.test("favourite")); // true // UK
// // === greedy   lazy
// console.log("titanic".match(/t[a-z]*i/)); // [ 'titani' ]
// console.log("titanic".match(/t[a-z]*?i/)); // [ 'ti' ] // lazy
// console.log("<h1>Header</h1>".match(/<.*>/)); // [ '<h1>Header</h1>'
// console.log("<h1>Header</h1>".match(/<.*?>/)); // [ '<h1>' // lazy
// // === beginning of the string
// console.log(/^to/.test("to be")); // true
// console.log(/^to/.test("not to be")); // false
// // === end of the string
// console.log(/be$/.test("not to be")); // true
// console.log(/\.$/.test("The quick brown fox jumps overthe lazy dog.")); // true // ends with .

// // === \w // shortcut for A-Za-z0-9_
// console.log("The quick brown fox jumps over the lazy dog".match(/\w/g).length); // 35
// console.log("The quick brown fox jumps over the lazy dog...".match(/\w/g).length); // 35
// console.log("The quick br0wn fox jumps 0ver the lazy d0g.".match(/\w/g).length); // 35
// console.log("The Quick Brown Fox Jumps Over The Lazy Dog.".match(/\w/g).length); // 35
// console.log("The_quick_brown_fox_jumps_overthe_lazy_dog.".match(/\w/g).length); // 42
// // // === \W // shortcut for spaces and periods (sign .)
// console.log("The quick brown fox jumps over the lazy dog".match(/\W/g).length); // 8
// console.log("The quick brown fox jumps over the lazy dog...".match(/\W/g).length); // 11
// console.log("The_quick_brown_fox_jumps_overthe_lazy_dog.".match(/\W/g).length); // 1
// // // === \d // shortcut for 0-9
// console.log("Your sandwich will be $5.00".match(/\d/g).length); // 3
// // // === \D // shortcut for 0-9
// console.log("Your sandwich will be $5.00".match(/\D/g).length); // 24
// console.log("Your_sandwich_will_be_$5.00".match(/\D/g).length); // 24
// // === \s // shortcut for space
// console.log("The quick brown fox jumps over the lazy dog".match(/\s/g).length); // 8
// console.log("The quick brown fox jumps over the lazy dog.".match(/\s/g).length); // 8
// // === \S // shortcut for non-space
// console.log("The quick brown fox jumps over the lazy dog".match(/\S/g).length); // 35
// console.log("The quick brown fox jumps over the lazy dog...".match(/\S/g).length); // 38
// console.log("The quick brown fox jumps over the lazy dog\/<>|~!@#$%^&*()_=+-".match(/\S/g).length); // 54
// const emailRegex = /\S+@\S+\.\S+/; // matches [text]@[text].[text]
// // === {}
// console.log(/Oh{1} no/.test("O no")); // false
// console.log(/Oh{1} no/.test("Oh no")); // true
// console.log(/Oh{1} no/.test("Ohh no")); // false
// // === {,}
// console.log(/Oh{1,2} no/.test("O no")); // false
// console.log(/Oh{1,2} no/.test("Oh no")); // true
// console.log(/Oh{1,2} no/.test("Ohh no")); // true
// console.log(/Oh{1,2} no/.test("Ohhh no")); // false
// console.log(/Oh{1,} no/.test( "Ohhhhhhhhhhhhhhhhh no")); // true

// // === lookahead
// positive // searches for 'q' then     'u' after it) but returns 'q' 
// console.log("qu".match(/q(?=u)/)); // [ 'q', 
// console.log("qq".match(/q(?=u)/)); // null 
// console.log("q".match(/q(?=u)/)); // null 
// negative // searches for 'q' then not 'u' after it) but returns 'q' 
// console.log("qt".match(/q(?!u)/)); // [ 'q', 
// console.log("qq".match(/q(?!u)/)); // [ 'q', 
// console.log("q".match(/q(?!u)/)); // [ 'q', 

// // === username rules // starts with letter + min 2 char long + ends with any digits
// console.log("J!".match(/^[A-Za-z]{2,}\d*$/)); // null
// console.log("JackOfAllTrades".match(/^[A-Za-z]{2,}\d*$/)); // [ 'JackOfAllTrades', 
// console.log("James007".match(/^[A-Za-z]{2,}\d*$/)); // [ 'James007', 
// console.log("Ja".match(/^[A-Za-z]{2,}\d*$/)); // [ 'Ja', 
// console.log("Jz".match(/^[A-Za-z]{2,}\d*$/)); // [ 'Jz', 

// // ??? === password rules // 3 chars + 2 consequitive digits
// (?=\w{3}) for 3 chars + (?=\D*\d{2}) for 2 consequitive digits
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("astronaut")); // false
// // console.log(/(?=\D*\d{2})(?=\w{3})/.test("astronaut")); // false
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("astronaut99")); // true
// console.log(/(?=\D*\d{2})(?=\w{3})/.test("astronaut99")); // true
// // >>> why doesn't work TODO
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("a999")); // TODO why true 
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("a99")); // TODO why true 
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("as99")); // TODO why true 
// console.log(/(?=\w{3})(?=\D*\d{2})/.test("ast99")); // TODO why true 
// // <<< why doesn't work // challenge
// console.log(/(?=\w{5})(?=\D*\d{2})/.test("a99")); // false
// console.log(/(?=\w{5})(?=\D*\d{2})/.test("as99")); // false
// console.log(/(?=\w{5})(?=\D*\d{2})/.test("ast99")); // TODO why true 
// console.log(/(?=\w{5})(?=\D*\d{2})/.test("astr99")); // TODO why true
// // fix // way 1
// console.log(/\w{3,}(?=\D*\d{2})/.test("as99")); // false
// console.log(/\w{3,}(?=\D*\d{2})/.test("ast9")); // false
// console.log(/\w{3,}(?=\D*\d{2})/.test("ast99")); // true 
// // fix // way 2
// console.log(/(?=\w{3,}\d{2})/.test("as99")); // false
// console.log(/(?=\w{3,}\d{2})/.test("ast9")); // false
// console.log(/(?=\w{3,}\d{2})/.test("ast99")); // true 
// // fix // way 3
// console.log(/\w{3,}\d{2}/.test("as99")); // false
// console.log(/\w{3,}\d{2}/.test("ast9")); // false
// console.log(/\w{3,}\d{2}/.test("ast99")); // true 

// // === grouping 
// // === (\1) 
// /(\w+)\s\1/ the same as /(\w+)\s(\w+)/
// console.log(/(\w+)\s\1/.test("regex regex")); // true
// console.log("regex regex".match(/(\w+)\s\1/)); // [ 'regex regex', 'regex', 

// console.log(/(\d+)\s\1\s\1/.test(("42 42 42"))); // true
// console.log(/(\d+)\s\1\s\1/.test(("24 24 24 24"))); // true
// console.log(/^(\d+)\s\1\s\1$/.test(("32 32 32 32"))); // false

// console.log("The sky is silver".replace(/silver/,"blue")); // The sky is blue
// console.log("Code Camp".replace(/(\w+)\s(\w+)/,'$2 $1')); // Camp Code

// // === challenge === trim spaces
// console.log("   Hello, World!   ".replace(/^\s+|\s+$/g,"")); // 

// console.log();


