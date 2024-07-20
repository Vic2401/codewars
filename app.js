let result = [];

splitString('hell0 askdmlsa!');

let string;

function splitString(string) {
  let second = 2;

  for (first = 0; first < string.length; first = first + 2) {
    if (string.length % 2 !== 0) {
      string = string + '_';
    }
    result.push(string.slice(first, second));
    second = second + 2;
  }
  console.log(result);
  return result;
}

splitString('hell0');
