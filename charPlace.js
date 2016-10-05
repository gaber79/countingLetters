function countingLetters(object) {

  object = object.split("");
  var letter = {};
  // var newObject = {};

  for (var i = 0; i < object.length; i++) {
    var char = object[i];
    var str = i.toString();
    if (letter[char]) {
      letter[char] = letter[char] + ", " +i.toString();

    } else {
      letter[char] = str;
    }

  }

  return letter;

}

var str = "lighthouse in the house";

console.log(countingLetters(str));