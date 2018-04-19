function Stack() {
  this.data = [];
  this.top = 0;
}

function convertirBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  return word === rword;
}