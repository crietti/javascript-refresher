// array of vowles
let vowels= ['a','e' , 'i' , 'o' , 'u'];
// splitting message into array of characters
let message='My name is Crissy'.split('')
// declare a varible to hold the output message due to the new line console log
let output = ''
// loop through each character in the message array
for (let index = 0; index < message.length; ++index) {
  const element = message[index];
  // check if charcater is vowel or space
  if (vowels.includes(element) || element ==' '){
    output += element + ' '
    } else {
      output += element + 'op' + ' '
  }

}
// output to console
console.log (output)