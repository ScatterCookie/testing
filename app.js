export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function isPalindrome(wording) {
  //using a loop it takes each letter and places it in the reverse order
  let reverse = "";
  for (let i = wording.length - 1; i >= 0; i--) {
    reverse += wording[i];
  }
  //checking to see if the word is still the same
  if (reverse.toLowerCase() == wording.toLowerCase()) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
isPalindrome("steve");
