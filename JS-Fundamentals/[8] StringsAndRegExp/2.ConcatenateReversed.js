function concatenateReversed(str) {
   let all = str.join("");
   let chars = Array.from(all);
   let reverseChars = chars.reverse();
   let reverseString = reverseChars.join("");
   console.log(reverseString);
}