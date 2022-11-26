//Write a function that takes an array of strings and returns the most frequently occurring string in that array.
//If there are several such lines, then you need to return the first one, going from left to right.

function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }
  return maxFreqStr;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
