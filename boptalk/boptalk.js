// let inputMessage = "Hey friend"
// let bopTalk = "op"

// let vowels = "aeiou"
// let letter = "i"

// if (vowels.includes(letter)) {
//     console.log("vowel");
// } else {
//     console.log("constanant");
// }
console.log(bobTalk("Hi my name is crissy"));

function bobTalk(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "op";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "op";
        return newStr;
    }
}
